import React from 'react';
import { useState } from 'react';
import "./recipe.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import $ from "jquery";
import { } from "jquery.cookie";
import Test from './Test';
import { PlusCircleOutlined } from "@ant-design/icons"
import DetailList from './detailList/DetailList';
import Footer from './footer';
import "./blog.css";

function Recipe() {

    const [title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");
    const [Video, setVideo] = useState("");
    const [Tag, setTag] = useState("");
    const [file, setFile] = useState(null);
    const [countList, setCountList] = useState([0])

    const onAddDetailDiv = () => {
        let countArr = [...countList]
        let counter = countArr.slice(-1)[0]
        counter += 1
        countArr.push(counter)   // index 사용 X
        // countArr[counter] = counter   // index 사용 시 윗줄 대신 사용   
        setCountList(countArr)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: $.cookie("login_cookie"),
            title,
            Video,
            Desc,
            categories: [Tag]
        };
        console.log($.cookie("login_cookie"))

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            console.log(data)
            newPost.photo = filename;
            try {
                await axios.post("http://localhost:5000/back/upload", data);
            } catch (err) {
                console.log(err)
            }
        }
        try {
            console.log(newPost)
            const res = await axios.post("http://localhost:5000/back/posts", newPost);
            window.location.href = "/bun"
            // window.location.replace("http://localhost:3000/post/" + res.data._id);
        } catch (err) { }
    };
    return (
        <>

            <div className='top'>
                레시피 등록
            </div>
            <div className="top2">
                <form >
                    <div className="boss">
                        <div className='bossLeft'>
                            <div className='sogae'>
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
                        </div>
                        <div className='ab'>
                            <label htmlFor="fileInput" className="touch">
                                {
                                    file ? <img htmlFor="fileInput" className="writeImg" src={URL.createObjectURL(file)} alt="" /> :
                                        <img htmlFor="fileInput" className="writeImg" src="http://www.billking.co.kr/index/skin/board/basic_support/img/noimage.gif" alt="" />
                                }
                            </label>
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
                        </div>

                    </div>

                    <div className="topF2"></div>
                    <div className='top'>
                        요리 순서
                    </div>
                    <div className='pz'>
                        <div >
                            <DetailList countList={countList} />
                        </div>
                        <button type="button" onClick={onAddDetailDiv}>
                            추가
                        </button>
                    </div>
                    <div className="topF2"></div>

                    <div className='sub'>
                        <button class="btn btn-success btn-lg" type="submit" onClick={handleSubmit}>
                            저장
                        </button>
                        <button class="btn btn-outline-dark btn-lg" type="submit" onClick={handleSubmit}>
                            취소
                        </button>
                    </div>

                </form>
                <div className="topF1"></div>
                <div className="container bun">
                    <Footer></Footer>
                </div>
            </div >

        </>
    );
}

export default Recipe; 