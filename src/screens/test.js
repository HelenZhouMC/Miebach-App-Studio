import React, { useRef } from "react";
import styled from "styled-components";
import header from "../images/HeaderBG.png";
import html2canvas from "html2canvas";

const Background = styled.div`
  background-color: #141c1b;
  min-width: 100vh;
  min-height: 100vh;
  padding: 16px 22px;
`;
const Header = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
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

function Test() {
  const headerRef = useRef(null);

  const capture = () => {
    if (headerRef.current) {
      html2canvas(headerRef.current).then((canvas) => {
        const img = document.createElement("img");
        img.src = canvas.toDataURL("image/jpeg");

        const link = document.createElement("a");
        link.download = "header-image.jpg";
        link.href = img.src;
        link.click();
      });
    }
  };

  return (
    <Background>
      <Header ref={headerRef}></Header>
      <button onClick={capture}>Download Header Image</button>
    </Background>
  );
}

export default Test;
