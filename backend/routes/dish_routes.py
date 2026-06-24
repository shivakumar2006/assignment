from fastapi import APIRouter 
from controllers.dish_controller import(fetch_dishes, toggle_dish_controller)

router = APIRouter(prefix="/api", tags=["Dishes"])

@router.get("/dishes")
def get_dishes():
    return fetch_dishes()

@router.patch("/dishes/{dish_id}/toggle")
def toggle_dish(dish_id: str): 
    return toggle_dish_controller(dish_id)