import {LoginApi} from '../api/api';
import React, {useState} from "react";

export default function Login() {

    const [data, setData] = useState({
        "username": "",
        "password": ""
    });

    const onSubmit = (e) => {
        e.preventDefault()

        LoginApi(data)

        console.log(data)
    }

    return (
        <form>
            <h2 className={'form-title'}>Connexion</h2>
            <input placeholder={'email'} name={'username'} onChange={(e) => {setData({ ...data, username: e.target.value });}}/>
            <input placeholder={'password'} name={'password'} onChange={(e) => {setData({ ...data, password: e.target.value });}}/>
            <input type={'hidden'} name={'token'}/>
            <button type={"submit"} onClick={onSubmit}>Se connecter</button>
        </form>
    );
}