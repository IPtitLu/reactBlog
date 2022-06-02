import {ShowPostsApi} from '../api/api'
import {useEffect, useState} from "react";
import axios from "axios";
import {getCookie} from "../api/cookie";

export default function Posts() {

    const [posts, getPosts] = useState('');

    const apiToken = axios.create({
        baseURL: `https://127.0.0.1:8000/api/`,
        timeout: 20000,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getCookie('token')}`,
        },
    })

    useEffect(() => {
        ShowPostsApi()
    }, [])

    function ShowPostsApi() {
        apiToken
            .get("posts")
            .then((response) => {
                const allPosts = response.data['hydra:member']

                console.log('posts 1 : ' + response.data)
                getPosts(allPosts)
            })
            .catch((error) => {
                console.log("error", error);
            });
    }

    // console.log('posts 2 : ' + posts[1].content)

    return (
        <div className={'post-container'}>
            <div className={'post-line'}></div>
            <small>Affichage des posts en développement</small>
        </div>
    )
}