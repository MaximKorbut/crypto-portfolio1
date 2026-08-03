from fastapi import FastAPI

app = FastAPI(
    title="Crypto Portfolio API",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "Crypto Portfolio API is running"
    }
