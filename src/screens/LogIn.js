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
  width: 615px;
  height: 296px;
  padding: 24px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 4px;
  border-radius: 16px;
  border: 1px solid black;
  background: linear-gradient(
      180deg,
      rgba(20, 28, 27, 0.8) 0%,
      rgba(20, 28, 27, 0) 100%
    ),
    url(${header}), lightgray 50% / cover no-repeat;
  background-position: center;
  background-size: cover;
  background-size: cover;
`;
const Logo = styled.div`
  display: flex;
  padding: 4px 16px;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  img {
    width: 60%;
    filter: brightness(0) invert(1);
  }
`;
const LoginForm = styled.div`
  display: flex;
  width: 275px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #fff;
  background: var(--colours-light-gray, #f2f2f2);
`;
const InputBox = styled.input`
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px #fff solid;
  background: #fff;
  height: 33px;
`;
const TitleBox = styled.div`
  color: var(--colours-dark, #141c1b);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;
const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const EnterButton = styled(Link)`
  display: flex;
  width: 100%;
  height: 36px;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid #fff;
  background: linear-gradient(180deg, #e73f00 0%, #e70098 100%);
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
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
