import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;

  button {
    margin-top: 30px;
    width: 100px;
    height: 50px;
    border: 1px solid white;
    font-size: 1.5rem;
    color: white;
  }
`;

function HomeTemplate() {
  const audio = new Audio("voice_sans.mp3");

  const sansvoice = () => {
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <Container tabIndex={0} onKeyDown={sansvoice}>
      <img src="sans1.gif" alt="" />
      <button onClick={sansvoice}>와</button>
    </Container>
  );
}

export default HomeTemplate;
