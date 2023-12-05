import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeCards from "../components/HomeCards";
import header from "../images/HeaderBG.png";

const Background = styled.div`
  background-color: #141c1b;
  min-width: 100vw;
  min-height: 100vh;
  padding: 1em 1.5em;
  @media (max-width: 768px) {
    padding: 1em;
  }
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  border-radius: 16px;
  background: linear-gradient(
      180deg,
      rgba(20, 28, 27, 0.8) 0%,
      rgba(20, 28, 27, 0) 100%
    ),
    url(${header}), lightgray 50% / cover no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;
const NaviBar = styled.div`
  display: flex;
  padding: 1% 3%;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  z-index: 2;
`;
const Logo = styled.div`
  flex-shrink: 0;
  display: flex;
`;
const Miebach = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: calc(20px + 10%);
`;
const Digital = styled.div`
  color: #db3e03;
  font-weight: 250;
  font-size: calc(20px + 10%);
`;
const TaskBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%;
  flex: 1 0 0;
`;
const Task = styled(Link)`
  color: #fff;
  text-align: center;
  font-size: calc(12px + 5%);
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
`;
const LogOut = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const MyApps = styled.div`
  color: #fff;
  font-size: calc(28px + 10%);
  font-style: normal;
  font-weight: 500;
  padding-left: 3%;
  z-index: 2;
`;
const MyAccount = styled(Link)`
  color: #fff;
  text-align: center;
  font-size: calc(12px + 5%);
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
`;

function Home() {
  return (
    <Background>
      <Header>
        <NaviBar>
          <Logo>
            <Miebach>Miebach</Miebach>
            <Digital>Digital</Digital>
          </Logo>
          <TaskBar>
            <Task to="/home" style={{ fontWeight: "650" }}>
              My apps
            </Task>
            <Task
              to="/capacity-management-with-forecast"
              state={{ animation: "slideLeft" }}
            >
              Capacity management with foresight
            </Task>
            <Task to="/power-of-ai" state={{ animation: "slideLeft" }}>
              Power of AI
            </Task>
            <Task
              to="/cost-to-serve-optimization"
              state={{ animation: "slideLeft" }}
            >
              Cost to serve & optimization
            </Task>
          </TaskBar>
          <LogOut>
            <MyAccount>My account&nbsp;&nbsp;</MyAccount>
            <Link to="/login">
              <i
                className="bi bi-box-arrow-right"
                style={{ color: "white", fontSize: "100%" }}
              ></i>
            </Link>
          </LogOut>
        </NaviBar>
        <MyApps>My apps</MyApps>
      </Header>
      <HomeCards />
    </Background>
  );
}

export default Home;
