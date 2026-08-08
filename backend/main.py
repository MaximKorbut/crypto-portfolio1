from fastapi import FastAPI
@app.get("/search/{query}")
def search(query: str):
    return search_coins(query)
    @app.get("/prices/{coins}")
def coin_prices(coins: str):

    coin_list = [
        coin.strip().lower()
        for coin in coins.split(",")
        if coin.strip()
    ]

    if not coin_list:
        return {"error": "No cryptocurrencies provided"}

    return get_coin_prices(coin_list)
app = FastAPI(
    title="Crypto Portfolio API",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        return{
"status":"online",
"version":"2.0",
"service":"Crypto Portfolio API"
}
@app.get("/history/{coin}")
def history(coin: str):

    supported_coins = {
        "bitcoin",
        "ethereum",
        "solana"
    }

    if coin.lower() not in supported_coins:
        return {
            "error": "Unsupported cryptocurrency"
        }

    return get_history(coin.lower())
