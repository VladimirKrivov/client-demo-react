import axios from "axios";

export const API_URL = `http://localhost:8080`

const $api = axios.create({
    //Куки для каждого запроса автоматически
    withCredentials: true,
    //Значение по умолчанию
    baseURL: API_URL
})

//Interceptor - позволяет автоматически цеплять на каждый запрос access токен
$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(`token`)}`
    return config;
})

export default $api;