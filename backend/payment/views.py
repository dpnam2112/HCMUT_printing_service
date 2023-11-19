from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
import json
from . import config
from . import create_order
import requests
from .utils import convert_sheets, calc_price, get_paypal_token


# Create your views here.

class CreateOrder(View):
    """ create Paypal order.

    Request payload:
        A JSON object:
            - keys are sheet types ('A0', 'A1', ..., 'A4')
            - values are # of sheets that the user is going to buy.
        For example: { 'A0': 1, 'A1': 2, 'A2': 3 }

    Endpoint returns:

    """
    def post(self, request):
        # TODO: Handle unauthenticated requests.

        # TODO: Handle incoming payloads.
        sheet_quantity = json.loads(request.body)

        a4_sheets = convert_sheets(sheet_quantity)

        # Create payload to send to paypal's API.
        amount = create_order.Amount(currency_code="USD", value=calc_price(a4_sheets))
        purchase_units = [create_order.PurchaseUnit(amount=amount)]
        create_order_data = create_order.CreateOrderPayload(intent="CAPTURE", purchase_units=purchase_units)
        serialized_data = create_order.CreateOrderPayloadSerializer(create_order_data)

        create_order_url = f"{config.API_URL}/v2/checkout/orders"

        access_token = get_paypal_token(client_id=config.CLIENT_ID, client_secret=config.CLIENT_SECRET)

        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {access_token}',
        }

        response = requests.post(url=create_order_url,
                                headers=headers,
                                data=json.dumps(serialized_data.data))

        return HttpResponse(response.text, content_type='application/json') 


class CaptureOrder(View):
    """ Capture order.

        Request payload: A JSON-formatted text including the following fields:
            - order_id: Paypal order ID
    """

    def post(self, request):
        # TODO: Authenticate the incoming request

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
        capture_resp = json.loads(capture_raw_resp.text)

        # TODO: Record the transaction
        return HttpResponse(capture_raw_resp, content_type="application/json")