from fastapi import FastAPI
from routes.dish_routes import router as get_dishes

app = FastAPI()

app.include_router(get_dishes)

@app.get("/")
def root():
    return {"message": "Dish dashboard api is running"}