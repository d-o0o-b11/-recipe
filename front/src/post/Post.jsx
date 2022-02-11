import React from 'react';
import './post.css'
import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap";
import "../blog.css";
function Post({ post }) {
    console.log(post)
    const style = {
        width: "18rem",
        margin: "0px",
        // border: "0px"
    };
    // console.log(post)
    // {_id: '61fa50c080aad9b892727d85', title: 'test', desc: 'test desc', username: 'kdyUpdated', categories: Array(0), …}categories: []createdAt: "2022-02-02T09:37:04.299Z"desc: "test desc"title: "test"updatedAt: "2022-02-02T09:37:04.299Z"username: "kdyUpdated"__v: 0_id: "61fa50c080aad9b892727d85"[[Prototype]]: Object
    // {_id: '61fa50db80aad9b892727d89', title: 'test2', desc: 'test desc', username: 'kdyUpdated', categories: Array(0), …}
    // {_id: '61fa542b80aad9b892727d8d', title: 'test3', desc: 'test desc', username: 'kdy', categories: Array(0), …}
    const PF = "http://localhost:5000/images/"
    console.log(PF + post.photo)
    return (
        <div className='go'>
            <Card style={style}>
                <Card.Img className="cardImg" variant="top" src={PF + post.photo} />
                <Card.Body>
                    <Card.Title className="postTitle">{post.title}</Card.Title>
                    <Card.Text>{post.Desc}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                    <div className="bun_people">
                        <img
                            className="bun_happy"
                            src="https://user-images.githubusercontent.com/62373865/150465330-7f300c9a-6e86-4a5a-a9ee-0a93afb9dca7.jpg"
                            alt="dog-profile"
                        />
                        <span className="bun_people_name">{post.username}</span>
                        {/* <p>주영맘</p> */}
                    </div>
                    <div className="bun_star">
                        <img
                            className="star"
                            src="https://user-images.githubusercontent.com/62373865/150468593-b8ae9fcb-d4e8-4a75-b749-4a1c7454bed0.jpg"
                            alt="dog-profile"
                        />
                        <img
                            className="star"
                            src="https://user-images.githubusercontent.com/62373865/150468593-b8ae9fcb-d4e8-4a75-b749-4a1c7454bed0.jpg"
                            alt="dog-profile"
                        />
                        <img
                            className="star"
                            src="https://user-images.githubusercontent.com/62373865/150468593-b8ae9fcb-d4e8-4a75-b749-4a1c7454bed0.jpg"
                            alt="dog-profile"
                        />
                        <img
                            className="star"
                            src="https://user-images.githubusercontent.com/62373865/150468593-b8ae9fcb-d4e8-4a75-b749-4a1c7454bed0.jpg"
                            alt="dog-profile"
                        />
                        <img
                            className="star"
                            src="https://user-images.githubusercontent.com/62373865/150468593-b8ae9fcb-d4e8-4a75-b749-4a1c7454bed0.jpg"
                            alt="dog-profile"
                        />
                        <span className="bun_star_name">(1) </span>
                        <span className="bun_star_name2">조회수 194</span>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Post;