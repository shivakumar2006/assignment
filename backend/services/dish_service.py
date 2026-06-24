from config.database import dishes_collection
from models.dish_model import add_dish

def get_all_dishes():
    dishes = dishes_collection.find()

    return [
        add_dish(dish)
        for dish in dishes
    ]

def toggle_dish(dish_id):
    dish = dishes_collection.find_one({"dishId": dish_id})

    if not dish: 
        return {"message": "Dish not found"}

    updated_status = not dish["isPublished"]

    dishes_collection.update_one(
        {"dishId": dish_id},
        {"$set": {"isPublished": updated_status}}
    )

    updated_dish = dishes_collection.find_one({"dishId": dish_id})

    return add_dish(updated_dish)