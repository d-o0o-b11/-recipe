import React, { Component } from "react";
import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

// import poster1 from "../public/bak_1.jpg";
// import poster2 from "../public/bak_2.jpg";
// import poster3 from "../public/bak_3.jpg";
// import poster4 from "../public/bak_4.jpg";
// import poster5 from "../public/bak_5.jpg";
// import poster6 from "../public/bak_6.jpg";
// import poster7 from "../public/bak_7.jpg";
// import poster8 from "../public/bak_8.jpg";

import "./blog.css";
const Sliders = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // autoplay: true,
    // speed: 2000,
    // qutoplaySpeed: 2000,
    // cssCase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const style = {
    width: "18rem",
    margin: "0px",
    border: "0px"
    // border: "0px"
  };
  const StyledSlider = styled(Slider)``;
  const posts = [1, 2, 3, 4, 5, 6, 7, 8];
  const posts2 = [
    "https://user-images.githubusercontent.com/62373865/150465348-6721931c-8090-4c46-baa4-cb22b443ac20.jpg",
    "https://user-images.githubusercontent.com/62373865/150465340-118d5b4a-898c-4771-b242-11f3bf591fda.jpg",
    "https://user-images.githubusercontent.com/62373865/150465341-57199341-e89d-4bc1-877a-af64e343e7e8.jpg",
    "https://user-images.githubusercontent.com/62373865/150465345-ca4e81bf-4c62-416a-a4d9-cdb20c987e59.jpg",
    "https://user-images.githubusercontent.com/62373865/150465347-d8cf5b3b-34a6-4b78-b9f5-52efa1205fa5.jpg",
    "https://user-images.githubusercontent.com/62373865/150465348-6721931c-8090-4c46-baa4-cb22b443ac20.jpg",
    "https://user-images.githubusercontent.com/62373865/150465350-737db5a6-eeff-49f6-af75-b6e1e8a6ea66.jpg",
    "https://user-images.githubusercontent.com/62373865/150465352-128b63b6-ead8-47d7-85eb-287849984695.jpg",
    "https://user-images.githubusercontent.com/62373865/150465337-fa82a0ba-4920-4e78-8460-be2415d28d0c.jpg"
  ];
  const posts3 = [
    "돼지고기 김치찌개",
    "아스파라거스 요리 쉽고 빠른 아스파라거스 베이컨말이 어때요?",
    "참~쉬운 찜닭",
    "강식당 김치밥",
    "소고기 미역국",
    "돼지고기 김치찌개",
    "촉촉한 완자전",
    "금악 온면",
    "와인으로 만든 뺑쇼"
  ];
  const posts4 = [
    "돼지고기 김치찌개",
    "맛남의 광장 진도 편에서 보여드렸던 대파제육볶음입니다. 설명이 따로 필요 없는 맛! ",
    "오늘은 친구들이나 가족에게 음식 솜씨를 뽐낼 수 있는 '찜닭'입니다. 한번 만들어 볼까요~?",
    "강식당2에 나온 김치밥입니다. 쉽게 구할 수 있는 재료로 만든 김치볶음밥의 업그레이드 버전, 김치밥! ",
    "미역국 끓이는 거 어렵지 않습니다! 집에서 쉽게 만들 수 있는 미역국! 직접 끓여보세요~",
    "간단하면서도 성공 확률이 높은 김치찌개 끓이는 방법을 알려드릴게요.",
    "아무리 큰 전이라도 겉.바.속.촉! 타지 않게 굽는 요령까지 다~ 알려드릴게요☺",
    "제주의 식재료를 활용해 뜨끈하게 끓여낸 신메뉴 '금악온면'도 많은 관심과 응원 부탁드립니다~ ❤",
    "제가 갖고 있는 와인 중에 제일 저렴한(?) 와인으로 뱅쇼 끓여봤습니다...?"
  ];
  return (
    <div>
      <StyledSlider {...settings}>
        {posts.map((index) => {
          return (
            <div>
              <Card style={style}>
                <Card.Img variant="top" src={posts2[index]} />
                <Card.Body className="bun_card_body">
                  <Card.Title className="bunTitle">{posts3[index]}</Card.Title>

                  <Card.Text className="bun_card_text">
                    {posts4[index]}
                  </Card.Text>
                  <div className="bun_people">
                    <img
                      className="bun_happy"
                      src="https://user-images.githubusercontent.com/62373865/150465330-7f300c9a-6e86-4a5a-a9ee-0a93afb9dca7.jpg"
                      alt="dog-profile"
                    />
                    <span className="bun_people_name">동영맘</span>
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
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
          );
        })}

        {/* <div>
          <Card style={style}>
            <Card.Img variant="top" src="./download.svg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={style}>
            <Card.Img variant="top" src="./download.svg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={style}>
            <Card.Img variant="top" src="./download.svg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={style}>
            <Card.Img variant="top" src="./download.svg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div> */}
      </StyledSlider>
    </div>
  );
};

export default Sliders;
