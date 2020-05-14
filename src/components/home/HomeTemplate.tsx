import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

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

const Spacer = styled.div`
  width: 100%;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  span {
    padding: 20px;
  }
`;

const Iframe = styled.iframe`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

function HomeTemplate() {
  const [fight, setFight] = useState<boolean>(false);

  const audio = new Audio("voice_sans.mp3");

  const sansvoice = () => {
    audio.currentTime = 0;
    audio.play();
  };

  if (fight) {
    return (
      <Iframe
        title="sans"
        src="https://jcw87.github.io/c2-sans-fight/"
      ></Iframe>
    );
  }

  return (
    <Container tabIndex={0} onKeyDown={sansvoice}>
      <Spacer>
        <Header>
          <span onClick={() => setFight(true)}>fight with sans</span>
        </Header>
      </Spacer>
      <img src="sans1.gif" alt="" />
      <button onClick={sansvoice}>와</button>
      <Spacer />
    </Container>
  );
}

export default HomeTemplate;
