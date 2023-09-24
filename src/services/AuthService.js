import $api from "../http";
import {AxiosResponse} from "axios";

export default class AuthService {
    static async login(username, password): Promise<AxiosResponse> {
        return  $api.post('/auth/authorize', {username, password})

    }

    static async registration(username, password): Promise<AxiosResponse> {
        return  $api.post('/auth/register', {username, password})

    }

    static async logout(): Promise<AxiosResponse> {
        return  $api.post('/auth/logout ')

    }

}
