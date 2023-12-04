from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from django.conf import settings
import json
from . import config, create_order
from .models import Transactions
from django.contrib.auth.models import User
import requests
from .utils import convert_sheets, calc_price, get_paypal_token, get_price
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import TransactionsSerializer

# Create your views here.

PAYPAL_API_TESTING = True

class CreateOrder(View):
    """ create Paypal order.
    api/payment/create-order/

    Request payload:
        A JSON object:
            - keys are sheet types ('A0', 'A1', ..., 'A4')
            - values are # of sheets that the user is going to buy.
        For example: { 'A0': 1, 'A1': 2, 'A2': 3 }

    Endpoint returns:

    """

    def create_payload(self, sheet_quantity: dict) -> create_order.CreateOrderPayloadSerializer:
        """ Create payload to send to Paypal's create_order API. """

        total_a4_sheets = convert_sheets(sheet_quantity)
        total_price = calc_price(sheet_quantity)

        ex_amount = create_order.ExtendedAmount(currency_code="USD", 
                                             value=total_price,
                                             breakdown=create_order.Breakdown(item_total=create_order.Amount(currency_code="USD", value=total_price)))

        # Create purchase unit
        items = []
        for key, value in sheet_quantity.items():
            items.append(
                create_order.Item(name=key, quantity=value,
                                unit_amount=create_order.Amount(currency_code="USD", value=get_price(key)))
            )

        purchase_units = [create_order.PurchaseUnit(amount=ex_amount, items=items)]

        create_order_data = create_order.CreateOrderPayload(intent="CAPTURE", purchase_units=purchase_units)

        serialized_data = create_order.CreateOrderPayloadSerializer(create_order_data)
        return serialized_data

    def create_transaction(self, user, req_payload: dict, trans_id, total_cost):
        keymaps = {
            "A0": "a0_sheets",
            "A1": "a1_sheets",
            "A2": "a2_sheets",
            "A3": "a3_sheets",
            "A4": "a4_sheets",
        }

        sheet_info = dict()
        for key, val in req_payload.items():
            sheet_info[keymaps[key]] = val

        transaction = Transactions.objects.create(user=user, **sheet_info, transaction_id=trans_id, total_cost=total_cost, status="INCOMPLETED")


    def post(self, request):
        # TODO: Handle incoming payloads.
        if not PAYPAL_API_TESTING and request.user and not request.user.is_authenticated:
            return HttpResponse("Unauthenticated", status_code=401, content_type="text/plain")

        sheet_quantity = json.loads(request.body)

        create_order_url = f"{config.API_URL}/v2/checkout/orders"

        access_token = get_paypal_token(client_id=config.CLIENT_ID, client_secret=config.CLIENT_SECRET)

        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {access_token}',
        }

        serialized_data = self.create_payload(sheet_quantity)
        response = requests.post(url=create_order_url,
                                headers=headers,
                                data=json.dumps(serialized_data.data))

        parsed_res = json.loads(response.text)

        trans_id = parsed_res["id"]

        user = User.objects.get(pk=1) if settings.PAYPAL_API_TESTING else request.user
        transaction = self.create_transaction(user=user, req_payload=sheet_quantity, trans_id=trans_id, total_cost=calc_price(sheet_quantity))

        return HttpResponse(response.text, content_type='application/json') 


class CaptureOrder(View):
    """ Capture order.
        /api/payment/capture-order
        Request payload: A JSON-formatted text including the following fields:
            - order_id: Paypal order ID
    """

    def post(self, request):
        # TODO: Authenticate the incoming request
        if not PAYPAL_API_TESTING and request.user and not request.user.is_authenticated:
            return HttpResponse("Unauthenticated", status_code=401, content_type="text/plain")

        # Complete the user's order
        access_token = get_paypal_token(config.CLIENT_ID, config.CLIENT_SECRET)
        req_payload = json.loads(request.body)

        headers = {
            'Authorization': f'Bearer {access_token}',
            'Content-Type': "application/json",
        }

        # Send request to Paypal's API to complete the transaction
        order_id = req_payload["order_id"]
        capture_url = f"{config.API_URL}/v2/checkout/orders/{order_id}/capture"

        capture_raw_resp = requests.post(url=capture_url,headers=headers,data={})
        capture_payload = json.loads(capture_raw_resp.text)
        if capture_raw_resp.status_code == 201:
            # payment is completed
            # TODO: Record the transaction
            capture_resp = capture_raw_resp.json()

            transaction = Transactions.objects.get(transaction_id=capture_resp["id"])
            transaction.status = capture_payload["status"]
            transaction.save()

        return HttpResponse(capture_raw_resp, content_type="application/json")


class GetTransactions(APIView):
    def get(self, request):
        """ Retrieve all transactions if user_id is not specified.
            If user_id is specified, Retrieve all transactions if that user. """
        query_params = dict(request.GET)
        for key, val in query_params.items():
            query_params[key] = val[0]

        user_id = None
        if "user_id" in query_params:
            user_id = query_params["user_id"]

        user = User.objects.get(pk=user_id) if user_id else None
        transactions = Transactions.objects.filter(user=user) if user else Transactions.objects.all()

        serializer = TransactionsSerializer(transactions, many=True)
        return Response(data=serializer.data)