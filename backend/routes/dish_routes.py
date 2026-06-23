from fastapi import APIRouter 
from controllers.dish_controller import fetch_dishes

router = APIRouter(prefix="/api", tags=["Dishes"])

@router.get("/dishes")
def get_dishes():
    return fetch_dishes()