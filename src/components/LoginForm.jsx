import React, {useContext, useState} from 'react';
import {Context} from "../index";

const LoginForm = () => {
    const [userName, setUserName] = useState('')
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
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                value={password}
            />

            <button onClick={() => store.login(userName, password)}>Login</button>
            <button onClick={() => store.registration(userName, password)}>Registration</button>


        </div>
    );
};

export default LoginForm;