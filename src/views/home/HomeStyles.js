/** @format */

import styled from "styled-components";

export const AppHeader = styled.div`
  display: flex;
  height: 40vh;
  width: 100%;
  flex-direction: column;
  color: #efedcc;
  align-items: center;
  background-color: rgba(25, 139, 202, 0.7);
  font-family: system-ui;
  @media (max-width: 767px) {
    height: 50vh;
    justify-content: space-evenly;
  }
  @media (max-width: 1024px) {
    height: 40vh;
  }

  h1 {
    font-size: 4rem;
    margin-top: 0.5rem;
    @media (max-width: 767px) {
      font-size: 2rem;
      text-align: center;
    }
    @media (max-width: 360px) {
      font-size: 1.5rem;
    }
  }
  p {
    font-size: 1.5rem;
    margin: 1rem;
    @media (max-width: 1024px) {
      text-align: center;
    }

    @media (max-width: 767px) {
      font-size: 1rem;
    }
    @media (max-width: 360px) {
      font-size: 0.8rem;
    }
  }
`;
