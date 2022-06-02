import {LoginApi} from '../api/api';
import React, {useState} from "react";
import {getCookie} from "../api/cookie";
import Login from '../components/login';
import Register from '../components/register';
import CreatePost from '../components/createPost';
import Posts from '../components/posts';


export default function ComponentsManager() {

    function components() {
        if(getCookie('token') === null) {
            return (
                <div>
                    <Login/>
                    <Register/>
                </div>
            )
        }
        if(getCookie('token') !== null){
            return (
                <div>
                    <CreatePost/>
                    <Posts/>
                </div>
            )
        }
    }



    return components();
}