import React, { Component } from "react";
import styles from "./styles.css";

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <div className="foot_back">
      {/* 왜 줄바꿈이 될까?*/}
      <div className="foot_center">
        <div>
          <img
            className="foot_pi round_img"
            src="https://user-images.githubusercontent.com/62373865/150468579-039f6ab1-f7eb-47c9-93e6-4ef13e948099.jpg"
            alt="Twitter"
          />
          <img
            className="foot_pi round_img"
            src="https://user-images.githubusercontent.com/62373865/150465369-abee9caf-480c-44ce-ab09-9bade2d8aa3a.jpg"
            alt="facebook"
          />
          <img
            className="foot_pi"
            src="https://user-images.githubusercontent.com/62373865/150465375-230f669f-c27e-4274-812f-5604b9c8064a.jpg"
            alt="instargram"
          />
        </div>

        <div>
          <h6>
            Info
            <span> | </span>
            Support
            <span> | </span>
            Marking
          </h6>
        </div>

        <h6 class="foot_color">&copy; {thisYear()} 오늘의 민족</h6>
      </div>
    </div>
  );
};

export default Footer;
