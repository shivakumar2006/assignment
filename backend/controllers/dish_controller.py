from services.dish_service import (get_all_dishes, toggle_dish)

def fetch_dishes(): 
    return get_all_dishes()

def toggle_dish_controller(dish_id):
    return toggle_dish(dish_id)
