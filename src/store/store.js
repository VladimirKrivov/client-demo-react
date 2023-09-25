import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";

export default class Store {
    user = {};
    isAuth = false;
    loading = false;
    userInfo = {};



    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    setUserInfo(userInfo) {
        this.userInfo = userInfo;
    }

    setLoading(loading) {
        this.loading = loading;
    }

    async login(username, password) {
        try {
            const  response = await AuthService.login(username, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('Rtoken', response.data.refreshToken);
            this.setAuth(true);
            const  response2 = await AuthService.userInfo();
            this.setUserInfo(response2.data);
        } catch (e) {
            console.log(e.responce?.data?.message);
        }
    }

    async registration(username, email, password) {
        try {
            const  response = await AuthService.registration(username, email, password);
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
            localStorage.removeItem('Rtoken', response.data.refreshToken);
            this.setAuth(false);
        } catch (e) {
            console.log(e.responce?.data?.message);
        }
    }


    async checkAuth() {
        this.setLoading(true)
        try {
            const response = await axios.post(`${API_URL}/auth/refresh`, {refreshToken: localStorage.getItem('Rtoken')})

            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
        }catch (e) {
            console.log(e.responce?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }

    async getUserInfo() {
        try {
            const  response = await AuthService.userInfo();
            this.setUserInfo(response.data);
            console.log(response.data);
        } catch (e) {
            console.log(e.responce?.data?.message);
        }
    }



}