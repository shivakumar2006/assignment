# 🍽️ Nosh Dish Management Dashboard

A full-stack dish management dashboard built using **React**, **FastAPI**, and **MongoDB**. The application allows administrators to view dishes, toggle their publication status, and automatically reflect backend changes through polling-based updates.

---

## Features

### Dashboard

- View all dishes
- Display dish image, name, ID, and publication status
- Search dishes by name
- Modern responsive UI built with React and TailwindCSS

### Dish Management

- Toggle dish publication status
- Instantly updates backend and frontend
- Persisted in MongoDB

### Automatic Updates

- Dashboard automatically refreshes data every 5 seconds
- Reflects changes made directly from the backend/database
- Simulates real-time synchronization using polling

---

## Tech Stack

### Frontend

- React.js
- Axios
- TailwindCSS

### Backend

- FastAPI
- Python

### Database

- MongoDB

---

## Project Structure

```text
frontend/
├── src/
│   ├── components/
│   │   └── DishCard.jsx
│   ├── pages/
│   │   └── Dashboard.jsx
│   ├── services/
│   │   └── dishApi.js
│   ├── App.jsx
│   └── main.jsx

backend/
├── controllers/
├── services/
├── models/
├── schemas/
├── routes/
├── config/
├── main.py
└── seed.py
```

---

## API Endpoints

### Get All Dishes

```http
GET /api/dishes
```

Returns all dishes from MongoDB.

### Toggle Dish Status

```http
PATCH /api/dishes/{dish_id}/toggle
```

Toggles the `isPublished` field of a dish.

---

## Database Schema

```json
{
  "dishId": "1",
  "dishName": "Jeera Rice",
  "imageUrl": "https://example.com/image.jpg",
  "isPublished": true
}
```

---

## Installation

### Backend

```bash
cd backend

python3 -m venv venv

source venv/bin/activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## How Automatic Updates Work

The dashboard polls the backend every 5 seconds:

```javascript
useEffect(() => {
  fetchDishes();

  const interval = setInterval(() => {
    fetchDishes();
  }, 5000);

  return () => clearInterval(interval);
}, []);
```

This ensures that any changes made directly through the backend are automatically reflected in the UI.

---

## Future Improvements

- WebSocket-based real-time updates
- Authentication & authorization
- Role-based access control
- Dish creation and deletion
- Analytics dashboard
- Docker deployment

---

## Author

**Shiva**

Full Stack Developer

Built as part of the Nosh Full Stack Development Assignment.
