import React from 'react';
import Post from '../post/Post';
import "./posts.css"

function Posts({ posts }) {
    console.log(posts)
    return (
        <div className='posts'>
            {posts.map((p) => (
                <Post post={p}></Post>
            ))}
        </div>
    );
}

export default Posts;