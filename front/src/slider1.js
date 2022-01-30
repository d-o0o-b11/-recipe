import React, { Component } from "react";
import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import styles from "./styles.css";

const Sliders = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 12,
    initialSlide: 0,

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
    width: "5rem",
    margin: "0px 15px 15px"
  };
  const StyledSlider = styled(Slider)`
    .slick-prev:before {
      content: "◀";
      color: black;
    }
    .slick-next:before {
      content: "▶";
      color: black;
    }
  `;

  return (
    <div>
      <div>
        <h2 className="recipe_header">
          레시피
          <span style={{ color: "green" }}> 분류</span>
        </h2>
      </div>
      <StyledSlider {...settings}>
        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465330-7f300c9a-6e86-4a5a-a9ee-0a93afb9dca7.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">전체</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy "
            src="https://user-images.githubusercontent.com/62373865/150465372-0f1e8464-eea0-410a-86ff-c5310b1fb106.jpg"
            alt="dog-profile"
          />
          <h6 className="lara recipe_title">밑반찬</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465389-d0fcf1b1-8bd3-44a9-8bf6-f50e3b09597a.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">메인반찬</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465353-930d467f-52a7-47e3-99ef-47e3ead64ec7.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">국/탕</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465391-56196143-a871-4bea-be5d-59abcf2521ba.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">찌개</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465328-8eaf3e9e-81d4-4a4f-87e6-7d0fd9b8b8c4.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">초스피드</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465370-584d62ae-90b7-4c3a-84a5-2f036910188c.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">손님접대</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465381-af481e55-ee5a-4e56-a661-6c1f59ad7dab.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">밥/죽/떡</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465384-6ce95e24-dad9-4d9e-ad31-5b4e7b4093e0.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">술안주</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465379-7c18d149-44d7-4083-97b4-99f945c42a76.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">면/만두</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465373-bb9bdfd4-4522-4ce6-ae4b-3a149504d87f.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">일상</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465357-13816696-65c5-471a-b64f-28033afe59ab.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">빵</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy "
            src="https://user-images.githubusercontent.com/62373865/150465366-12c2c274-e726-4f52-9d30-88194d86965c.jpg"
            alt="dog-profile"
          />
          <h6 className="lara recipe_title">다이어트</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465365-d60e3d7c-010b-47f8-9cd9-be659080f1d8.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">디저트</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465383-b3f5f5bf-4673-4994-8efc-1956be633a7a.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">샐러드</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465390-692ef866-2ae8-4801-8cb9-fa43a91fbe3e.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">양식</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465377-83768412-ef5e-42c0-b96a-b3ceff884cd8.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">김치/젓갈/장류</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465378-f295fa77-8647-48c2-b79a-816d555e7a91.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">도시락</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465385-7c0afebd-e383-4656-ab93-dee31307878f.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">간식</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465380-ec917975-3501-48a2-b735-bee0eec336f3.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">돼지고기</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465359-65481234-7814-4b2f-9937-49126102998c.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">영양식</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465363-9d963b6a-0351-451d-b078-f6a39428e355.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">과자</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465376-8af3a55d-27e6-4706-b4e4-e50449e4e243.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">양념/소스/잼</h6>
        </div>

        <div>
          <img
            className="testimonial-image happy"
            src="https://user-images.githubusercontent.com/62373865/150465392-61cf52b6-05a9-4154-92f3-3ed379ae8dcd.jpg"
            alt="dog-profile"
          />
          <h6 className="recipe_title">차/음료/술</h6>
        </div>
      </StyledSlider>
    </div>
  );
};

export default Sliders;
