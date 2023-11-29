import requests

def get_paypal_token(client_id, client_secret):
    """
        Retrieves an OAuth2 access token from PayPal API using client credentials.

        Args:
            client_id (str): The client ID provided by PayPal.
            client_secret (str): The client secret provided by PayPal.

        Returns:
            dict: A dictionary containing the response data from the PayPal API.
    """

    url = "https://api-m.sandbox.paypal.com/v1/oauth2/token"

    headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }
    data = {
        "grant_type": "client_credentials"
    }
    auth = (client_id, client_secret)

    response = requests.post(url, headers=headers, data=data, auth=auth)
    return response.json()["access_token"]

def convert_sheets(sheet_quantity):
    a4_equivalent = 0

    # Conversion factors for different sheet types
    conversion_factors = {
        'A4': 1,
        'A3': 2,
        'A2': 4,
        'A1': 8,
        'A0': 16
    }

    # Iterate over the sheet_quantity dictionary
    for sheet_type in sheet_quantity:
        quantity = sheet_quantity[sheet_type]
        a4_equivalent += conversion_factors[sheet_type] * quantity
    return a4_equivalent

def calc_price(sheet_quantity: dict):
    price = {
        "A4": 0.01,
        "A3": 0.02,
        "A2": 0.04,
        "A1": 0.08,
        "A0": 0.16
    }
    
    total = 0
    for sheet in sheet_quantity.keys():
        total += price[sheet] * sheet_quantity[sheet]

    return total

def get_price(sheet_type):
    price = {
        "A4": 0.01,
        "A3": 0.02,
        "A2": 0.04,
        "A1": 0.08,
        "A0": 0.16
    }

    return price[sheet_type]