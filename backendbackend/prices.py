import requests

from config import API_URL


def get_prices():
    response = requests.get(
        API_URL,
        params={
            "ids": "bitcoin,ethereum,solana",
            "vs_currencies": "usd"
        },
        timeout=10
    )

    response.raise_for_status()

    return response.json()


def get_history(coin="bitcoin", days=7):
    response = requests.get(
        f"https://api.coingecko.com/api/v3/coins/{coin}/market_chart",
        params={
            "vs_currency": "usd",
            "days": days
        },
        timeout=10
    )

    response.raise_for_status()

    return response.json()
def search_coins(query: str):
    response = requests.get(
        "https://api.coingecko.com/api/v3/search",
        params={
            "query": query
        },
        timeout=10
    )

    response.raise_for_status()

    return response.json()
