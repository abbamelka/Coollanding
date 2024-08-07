import React from "react";
import {Container} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import {HomeSectionStyled} from "./home.styled";
import homeImg from "../../assets/home-bg.jpg";
const Home = () => {
  return (
    <HomeSectionStyled
      id={"home"}
      className="home-sec d-flex align-items-center"
      style={{
        background: `url(${homeImg}) top center no-repeat`,
        height: "calc(100vh - 100px)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Container className="home-container animate__animated animate__lightSpeedInLeft">
        <h1>WELCOME TO COOL FASHION</h1>
        <h2>
          We are team of talented designers making fashion goes extra mile
        </h2>
      </Container>
    </HomeSectionStyled>
  );
};

export default Home;
