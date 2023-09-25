import $api from "../http";
import {AxiosResponse} from "axios";

export default class AuthService {
    static async login(username, password): Promise<AxiosResponse> {
        return  $api.post('/auth/authorize', {username, password})

    }

    static async registration(username, email, password): Promise<AxiosResponse> {
        return  $api.post('/auth/register', {username, email, password})

    }

    static async logout(): Promise {
        return  $api.post('/auth/logout')
    }

    static async userInfo(): Promise {
        return $api.get('/auth/userinfo')
    }
}
