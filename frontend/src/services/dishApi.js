import axios from "axios";

const APIKEY = import.meta.env.VITE_API_KEY;

const Api = axios.create({
    baseURL: APIKEY
});

export const getDishes = () => {
    return Api.get("/dishes")
};

export const toggleDish = (id) => {
    return Api.patch(`/dishes/${id}/toggle`)
}