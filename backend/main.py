from fastapi import FastAPI

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
