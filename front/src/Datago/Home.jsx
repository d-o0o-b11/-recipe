import React from 'react';
import "./home.css"
import axios from "axios"
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Posts from '../posts/Posts';
// import { search } from '../../../../api/routes/auth';

function Home() {
    const [posts, setPosts] = useState([]);
    // const { search } = useLocation();
    const { search } = useLocation()
    // console.log(search)
    // console.log(location)
    // http://localhost:3000/posts/?user=kdyUpdated
    // {pathname: '/posts/', search: '?user=kdyUpdated', hash: '', state: undefined}
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:5000/back/posts");
            // console.log(res)
            setPosts(res.data);
            console.log(res.data)
            // {data: Array(3), status: 200, statusText: 'OK', headers: {…}, config: {…}, …}
            // config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}
            // data: (3) [{…}, {…}, {…}]
            // headers: {content-length: '581', content-type: 'application/json; charset=utf-8', date: 'Wed, 02 Feb 2022 21:56:18 GMT', etag: 'W/"245-nGaT93/POQnKQsl7TaP5icxjyF8"', x-powered-by: 'Express'}
            // request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: true, upload: XMLHttpRequestUpload, …}
            // status: 200
            // statusText: "OK"
            // [[Prototype]]: Object
        };
        fetchPosts();
    }, [search]);
    return (
        <>
            <div className="home">
                <Posts posts={posts} />
            </div>
        </>
    );
}

export default Home;