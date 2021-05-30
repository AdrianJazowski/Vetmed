/** @format */

import styled, { keyframes } from "styled-components";

const cardEntrance = keyframes`
    from {
      opacity: 0;
      transform: scale(0.3);
      filter: hue-rotate(180deg);
    }
    to {
      opacity: 1;
      transform: scale(1);
      filter: hue-rotate(0deg);
    }
  }`;

export const Galery = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;
export const WrapperForPhoto = styled.div`
  height: 60%;
  width: 70%;

  display: grid;
  gap: 1rem;

  /* Explicit grid */
  grid-template-areas:
    "a  b  c  d"
    "l  🌟 🌟 e"
    "k  🌟 🌟 f"
    "j  i  h  g";

  grid-template-rows: repeat(4, 25%);
  grid-template-columns: 240px auto auto 240px;

  --stagger-delay: 100ms;
`;
export const Photo = styled.img`
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
    rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  transition: all 500ms;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${cardEntrance} 700ms ease-out;
  animation-fill-mode: backwards;

  :nth-child(1) {
    grid-area: a;
    animation-delay: calc(1 * var(--stagger-delay));
  }
  :nth-child(2) {
    grid-area: b;
    animation-delay: calc(2 * var(--stagger-delay));
  }
  :nth-child(3) {
    grid-area: c;
    animation-delay: calc(3 * var(--stagger-delay));
  }
  :nth-child(4) {
    grid-area: d;
    animation-delay: calc(4 * var(--stagger-delay));
  }
  :nth-child(5) {
    grid-area: e;
    animation-delay: calc(5 * var(--stagger-delay));
  }
  :nth-child(6) {
    grid-area: f;
    animation-delay: calc(6 * var(--stagger-delay));
  }
  :nth-child(7) {
    grid-area: g;
    animation-delay: calc(7 * var(--stagger-delay));
  }
  :nth-child(8) {
    grid-area: h;
    animation-delay: calc(8 * var(--stagger-delay));
  }
  :nth-child(9) {
    grid-area: i;
    animation-delay: calc(9 * var(--stagger-delay));
  }
  :nth-child(10) {
    grid-area: j;
    animation-delay: calc(10 * var(--stagger-delay));
  }
  :nth-child(11) {
    grid-area: k;
    animation-delay: calc(11 * var(--stagger-delay));
  }
  :nth-child(12) {
    grid-area: l;
    animation-delay: calc(12 * var(--stagger-delay));
  }
  :last-child {
    grid-area: 🌟;
    animation-delay: calc(13 * var(--stagger-delay));
  }
`;