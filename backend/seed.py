from config.database import dishes_collection

dishes = [
    {
        "dishName": "Jeera Rice",
        "dishId": "1",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/jeera-rice.jpg",
        "isPublished": True
    },
    {
        "dishName": "Paneer Tikka",
        "dishId": "2",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/paneer-tikka.jpg",
        "isPublished": True
    },
    {
        "dishName": "Rabdi",
        "dishId": "3",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/rabdi.jpg",
        "isPublished": True
    },
    {
        "dishName": "Chicken Biryani",
        "dishId": "4",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/chicken-biryani.jpg",
        "isPublished": True
    },
    {
        "dishName": "Alfredo Pasta",
        "dishId": "5",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/alfredo-pasta.jpg",
        "isPublished": True
    },
]

dishes_collection.insert_many(dishes)

print("data inserted successfully")