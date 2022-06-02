import React, {useState} from "react";
import {RegisterApi} from "../api/api";

export default function Register() {
    const [data, setData] = useState({
        "email": "",
        "password": ""
    });

    const onSubmit = (e) => {
        e.preventDefault()

        RegisterApi(data)

        console.log(data)
    }

    return (
        <form>
            <h2 className={'form-title'}>Inscription</h2>
            <input placeholder={'email'} name={'email'} onChange={(e) => {setData({ ...data, email: e.target.value });}}/>
            <input placeholder={'password'} name={'password'} type={'password'} onChange={(e) => {setData({ ...data, password: e.target.value });}}/>
            <button type={"submit"} onClick={onSubmit}>Inscription</button>
        </form>
    );
}