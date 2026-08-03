import requests
from config import API_URL

def get_prices():
    response = requests.get(
        API_URL,
        params={
            "ids": "bitcoin,ethereum,solana",
            "vs_currencies": "usd"
        }
    )

    return response.json()
