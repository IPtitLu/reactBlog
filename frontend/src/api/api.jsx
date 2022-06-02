import axios from 'axios'

import {getCookie, setCookie} from './cookie'

const api = axios.create({
    baseURL: `https://127.0.0.1:8000/api/`,
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
    },
})

const apiToken = axios.create({
    baseURL: `https://127.0.0.1:8000/api/`,
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getCookie('token')}`,
    },
})

export async function LoginApi(data) {
    let rep = {};
    await api
        .post("login_check", data)
        .then((response) => {
            console.log("response of login", response);
            rep = response;

            console.log(rep.data.token)

            setCookie('token', rep.data.token)

            window.location.reload(false);
        })
        .catch((error) => {
            console.log("error", error);
        });
    return rep;
}

export async function RegisterApi(data) {
    let rep = {};
    await api
        .post("register", data)
        .then((response) => {
            console.log("response of register", response);
            rep = response;
        })
        .catch((error) => {
            console.log("error", error);
        });
    return rep;
}

export async function createPostApi(data) {
    let rep = {};
    await apiToken
        .post("create-post", data)
        .then((response) => {
            console.log("response of create post", response);
            rep = response;
        })
        .catch((error) => {
            console.log("error", error);
        });
    return rep;
}

export function ShowPostsApi() {
    api
        .get("posts")
        .then((response) => {
            console.log("response of show posts", response);
            return response;
        })
        .catch((error) => {
            console.log("error", error);
        });
}