from pydantic import BaseModel 

class Dish(BaseModel): 
    dishId: int 
    dishName: str 
    imageUrl: str 
    isPublished: bool