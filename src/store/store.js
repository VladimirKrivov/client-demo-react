import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";

export default class Store {
    user = {};
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    async login(username, password) {
        try {
            const  response = await AuthService.login(username, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
        } catch (e) {
            console.log(e.responce?.data?.message);
        }
    }

    async registration(username, password) {
        try {
            const  response = await AuthService.registration(username, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
        } catch (e) {
            console.log(e.responce?.data?.message);
        }
    }

    async logout() {
        try {
            const  response = await AuthService.logout();
            console.log(response);
            localStorage.removeItem('token', response.data.accessToken);
            this.setAuth(false);
        } catch (e) {
            console.log(e.responce?.data?.message);
        }
    }


}