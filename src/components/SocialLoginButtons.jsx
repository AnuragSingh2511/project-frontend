import React from "react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import styled from "styled-components";

const SocialLoginButtons = () => {
  return (
    <Container>
      <button type="button">
        <BsGoogle />{" "}
      </button>
      <button type="button">
        <BsFacebook />{" "}
      </button>
      <button type="button">
        <BsGithub />{" "}
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  background-color: transparent;
  button {
    background-color: transparent;
    border: 0.1rem solid #4e0eff;
    color: white;
    padding: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #4e0eff;
    }
  }
`;

export default SocialLoginButtons;
