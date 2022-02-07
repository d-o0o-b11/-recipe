import React from 'react';
import { useState } from 'react';
import "./recipe.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function Recipe() {
    const [title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");
    const [Video, setVideo] = useState("");
    const [Tag, setTag] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const newPost = {
        //     username: user.username,
        //     title,
        //     desc,
        // };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            console.log(data)
            // newPost.photo = filename;
            try {
                await axios.post("http://localhost:5000/back/upload", data);
            } catch (err) {
                console.log(err)
            }
        }
        // try {
        //     const res = await axios.post("http://localhost:3000/api/posts", newPost);
        //     window.location.replace("http://localhost:3000/post/" + res.data._id);
        // } catch (err) { }
    };
    return (
        <>
            <div className='top'>
                레시피 등록
            </div>
            <div className="top2">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='lalabel'>
                            레시피 제목
                        </label>
                        <input
                            type="text"
                            placeholder="예) 맛있는 라면 끓이기"
                            autoFocus={true}
                            className='lalabelBtn'
                            onChange={e => {
                                setTitle(e.target.value)
                                // console.log(e.target.value)
                                // Title 창에 입력한 문자열이 동적으로 저장
                            }}
                        />
                    </div>
                    <div className='sogae'>
                        <label className='lalabel2'>
                            요리 소개
                        </label>
                        <textarea
                            type="text"
                            placeholder="이 레시피의 탄생배경을 적어주세요.&#13;&#10;예) 주영이의 생일을 맞아 미역국을 끓여봤어요.&#13;&#10;그리고 주영이는 바보예요."
                            // autoFocus={true}
                            className='lalabelBtn2'
                            onChange={e => {
                                setDesc(e.target.value)
                                // console.log(e.target.value)
                                // Title 창에 입력한 문자열이 동적으로 저장
                            }}
                        />
                    </div>
                    <div className='sogae'>
                        <label className='lalabel3'>
                            동영상
                        </label>
                        <textarea
                            type="text"
                            placeholder="동영상이 있으면 주소를 입력해주세요."
                            // autoFocus={true}
                            className='lalabelBtn2'
                            onChange={e => {
                                setVideo(e.target.value)
                                // console.log(e.target.value)
                                // Title 창에 입력한 문자열이 동적으로 저장
                            }}
                        />
                    </div>

                    <div className='sogae'>
                        <label className='lalabel4'>
                            태그
                        </label>
                        <input
                            type="text"
                            placeholder="태그를 입력해주세요."
                            // autoFocus={true}
                            className='lalabelBtn'
                            onChange={e => {
                                setTag(e.target.value)
                                // console.log(e.target.value)
                                // Title 창에 입력한 문자열이 동적으로 저장
                            }}
                        />
                    </div>
                    <div className='ab'>
                        <label htmlFor="fileInput" className="touch"></label>
                        {
                            file ? <img htmlFor="fileInput" className="writeImg" src={URL.createObjectURL(file)} alt="" /> :
                                <img htmlFor="fileInput" className="writeImg" src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt="" />
                        }

                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange={(e) => {
                                setFile(e.target.files[0])
                                // 콘솔 찍어본 결과 
                                // e 는 엄청 긴 객체이며 

                                // console.log(e.target.files[0])
                                // File {name: '20211221_001404.png', lastModified: 1640013248543, 
                                // lastModifiedDate: Tue Dec 21 2021 00:14:08 GMT+0900 (한국 표준시)
                                // , webkitRelativePath: '', size: 169867, …}
                            }
                            }
                        />
                        <div className='sub'>
                            <button class="btn btn-success btn-lg" type="submit">
                                저장
                            </button>
                            <button class="btn btn-outline-dark btn-lg" type="submit">
                                취소
                            </button>
                        </div>

                    </div>
                </form>
            </div >

        </>
    );
}

export default Recipe; 