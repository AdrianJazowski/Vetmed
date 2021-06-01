/** @format */

import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const NavbarWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 5rem;
  height: 100vh;
  background-color: #23232e;
  transition: all 0.3s ease;
  z-index: 1000;
  span {
    display: inline;
    position: absolute;
    left: -999px;
    transition: 0.6s;
  }
  :hover {
    width: 16rem;
    span {
      display: inline;
      left: 70px;
    }
  }
`;
export const NavbarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const LogoElement = styled.li`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  width: 100%;
  img {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
  }
`;
export const NavbarLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 5rem;
  color: #b6b6b6;
  text-decoration: none;
  transition: 0.6s;

  img {
    color: beige;
    transition: 0.6s;
  }
  :hover {
    background: #141418;
    color: #ececec;
  }
`;
export const NavbarElement = styled.li`
  width: 100%;
  img {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
  }
  ${({ last }) =>
    last &&
    css`
      margin-top: auto;
      margin-bottom: 2rem;
    `}
`;
