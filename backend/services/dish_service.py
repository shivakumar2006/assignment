from config.database import dishes_collection
from models.dish_model import add_dish

def get_all_dishes():
    dishes = dishes_collection.find()

    return [
        add_dish(dish)
        for dish in dishes
    ]