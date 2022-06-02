import React, {useState} from "react";
import {createPostApi} from "../api/api";
import {getCookie} from "../api/cookie";

export default function CreatePost() {

    const [data, setData] = useState({
        "title": "",
        "content": "",
        "token": getCookie('token')
    });

    const onSubmit = (e) => {
        e.preventDefault()

        createPostApi(data)

        console.log(data)
    }

    return (
        <form>
            <h2 className={'form-title'}>Création d'un post</h2>
            <input placeholder={'title'} name={'title'} onChange={(e) => {setData({ ...data, title: e.target.value });}}/>
            <textarea placeholder={'content'} name={'content'} onChange={(e) => {setData({ ...data, content: e.target.value });}}/>
            <button type={"submit"} onClick={onSubmit}>Créer un post</button>
        </form>
    );
}