from schemas.dish_schema import Dish 

def add_dish(dish):
    return{
        "dishId": dish["dishId"],
        "dishName": dish["dishName"],
        "imageUrl": dish["imageUrl"],
        "isPublished": dish["isPublished"],
    }
