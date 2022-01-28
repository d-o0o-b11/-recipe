import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import Slider from "react-slick";
import styled from "styled-components";
import "./blog.css";
const bun = () => {
  return (
    <>
      <h6>
        <span className="green_cute"> 88</span> 개의 맛있는 레시피가 있습니다.
      </h6>
      {/* <Button variant="outline-primary">Primary</Button>{" "}
      <Button variant="outline-secondary">Secondary</Button>{" "}
      <Button variant="outline-success">Success</Button>{" "}
      <Button variant="outline-warning">Warning</Button>{" "}
      <Button variant="outline-danger">Danger</Button>{" "}
      <Button variant="outline-info">Info</Button>{" "}
      <Button variant="outline-light">Light</Button>{" "}
      <Button variant="outline-dark">Dark</Button> */}
    </>
  );
};

export default bun;
