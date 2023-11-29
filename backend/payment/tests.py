from django.test import TestCase, Client
from . import utils
import json

# Create your tests here.

class CreateOrderTest(TestCase):
    def setUp(self):
        pass

    def test_create_order(self):
        c = Client()
        response = c.post(path="/payment/create_order/",
                          content_type="application/json",
                          data={ "A0": 1, "A1": 2 })
        res_data = response.json()
        print(res_data)
        self.assertEqual("status" in res_data, True)

class CaptureOrderTest(TestCase):
    def setUp(self):
        pass

    def test_capture_order(self):
        order_id = "48C165039P961244P"
        c = Client()
        response = c.post(path="/payment/capture_order/",
                          content_type="application/json",
                          data={"order_id": order_id})
        res_data = response.json()
        print(res_data)