from fastapi import FastAPI
from prices import get_prices, get_history
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
    return get_history(coin)
