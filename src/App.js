import LoginForm from "./components/LoginForm";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import RegisterForm from "./components/RegisterForm";



function App() {

    const refreshPage = ()=>{
        window.location.reload();
    }

    const {store} = useContext(Context)

    // useEffect(() => {
    //     console.log("Начало выполнение useEffect")
    //     console.log("переменная авторизации isAuth" + " " + store.isAuth)
    //     console.log()
    //
    //     if (!localStorage.getItem('token') && localStorage.getItem('Rtoken')){
    //         console.log("вход в if")
    //         store.checkAuth()
    //     }
    // }, []);


    useEffect(() => {
        async function scanToken() {
                if (!localStorage.getItem('token') && localStorage.getItem('Rtoken')){
                    console.log("вход в if")
                    store.checkAuth()
                }
                if (localStorage.getItem('token') && localStorage.getItem('Rtoken')) {
                    store.setAuth(true)
                    await store.getUserInfo();
                    console.log(store.userInfo.username);
            }
        }

        scanToken();
    }, []);



    if (store.loading) {
        return (
            <div>Loading.....</div>
        )
    }

    if (!store.isAuth) {
        return (
            <div className="App">
                <h1>АВТОРИЗУЙТЕСЬ</h1>
                <LoginForm/>

                <h1>Зарегистрируйтесь</h1>
                <RegisterForm/>
            </div>
        )
    }

    if (store.isAuth) {
        return (
            <div className="App">
                <h1>Пользователь авторизован</h1>
                <h2>{store.userInfo.username}</h2>
                <button onClick={() => store.logout()} >Logout</button>
            </div>
        )
    }


  return (
    <div className="App">
      {/*<h1>Пользователь авторизован</h1>*/}
      {/*  <button onClick={store.logout} >Logout</button>*/}
    </div>
  );
}

export default observer(App);
