import React, { useState } from "react"
import styled from "styled-components"
import "./detailList.css"






const DetailList = (props) => {
    const [file, setFile] = useState([]);

    console.log(props)
    return (
        <>
            {props.countList && props.countList.map((item, i) => (
                <div className="tt" key={i} style={{ width: "100%" }}>
                    <label className='lab'>Step {i + 1}</label>
                    <div className="tt2">
                        <label htmlFor={"fileInput" + i} >
                            {
                                file[i] ? <img htmlFor={"fileInput" + i} className="writeImg1" src={URL.createObjectURL(file[i])} alt="" /> :
                                    <img htmlFor={"fileInput" + i} className="writeImg1" src="http://www.billking.co.kr/index/skin/board/basic_support/img/noimage.gif" alt="" />
                            }
                        </label>
                        <textarea
                            type="text"
                            placeholder="예) 소고기는 기름기를 떼어내고 적당한 크기로 썰어주세요."
                            className='step'
                        />
                    </div>
                    <input
                        type="file"
                        id={"fileInput" + i}
                        style={{ display: "none" }}
                        accept='image/jpg, image/jpeg, image/png'
                        /*onChange={(e)=>insertImg(e)} */
                        onChange={(e) => {
                            setFile([...file, e.target.files[0]])
                        }
                        }
                    />
                </div>
            ))}
        </>
    )
}

export default DetailList