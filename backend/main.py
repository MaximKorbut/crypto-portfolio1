from fastapi import FastAPI
@app.get("/search/{query}")
def search(query: str):
    return search_coins(query)
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
