import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const RegisterForm = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {store} = useContext(Context);
    return (
        <div>

            <input
                onChange={e => setUserName(e.target.value)}
                type="text"
                placeholder="username"
                value={userName}
            />

            <input
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="email"
                value={email}
            />

            <input
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                value={password}
            />

            <button onClick={() => store.registration(userName, email, password)}>Registration</button>


        </div>
    );
};

export default observer(RegisterForm);