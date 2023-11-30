import React from "react";
import styled from "styled-components";
import header from "../images/HeaderBG.png";
import logo from "../images/loginLogo.png";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Background = styled.div`
  background-color: #141c1b;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
`;
const LoginDiv = styled.div`
  display: flex;
  width: 40vw;
  min-width: 300px;
  padding: 2%;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: 16px;
  background: linear-gradient(
      180deg,
      rgba(20, 28, 27, 0.8) 0%,
      rgba(20, 28, 27, 0) 100%
    ),
    url(${header}), lightgray 50% / cover no-repeat;
  background-position: center;
  background-size: cover;
`;
const Logo = styled.div`
  display: flex;
  padding: 1% 2%;
  align-items: center;
  flex: 1 0 0;
  img {
    width: 70%;
    filter: brightness(0) invert(1);
  }
`;
const LoginForm = styled.div`
  display: flex;
  width: 100%;
  padding: 10%;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 8px;
  background: var(--colours-light-gray, #f2f2f2);
`;
const InputBox = styled.input`
  display: flex;
  padding: 2%;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 8px;
  border: 1px #fff solid;
  background: #fff;
  width: 100%;
`;
const TitleBox = styled.div`
  color: var(--colours-dark, #141c1b);
  font-size: calc(12px + 6%);
  font-style: normal;
  font-weight: 400;
`;
const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const EnterButton = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 2% 5%;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: linear-gradient(180deg, #e73f00 0%, #e70098 100%);
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-size: calc(12px + 6%);
  font-style: normal;
  font-weight: 500;
`;

function LogIn() {
  return (
    <div>
      <Background>
        <LoginDiv>
          <Col>
            <Logo>
              {" "}
              <img src={logo} alt="logo" />{" "}
            </Logo>
          </Col>
          <Col>
            <LoginForm>
              <div style={{ width: "100%" }}>
                <Row className="mb-2">
                  <TitleBox>Email address</TitleBox>
                  <InputBox></InputBox>
                </Row>
                <Row className="mb-2">
                  <TitleBox>Password</TitleBox>
                  <InputBox></InputBox>
                </Row>
                <Row className="mb-5"></Row>
                <CenteredDiv>
                  <EnterButton to="/home">Enter</EnterButton>
                </CenteredDiv>
              </div>
            </LoginForm>
          </Col>
        </LoginDiv>
      </Background>
    </div>
  );
}

export default LogIn;
