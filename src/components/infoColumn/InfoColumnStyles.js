/** @format */

import styled from "styled-components";

export const SingleArticle = styled.article`
  margin-bottom: 1rem;
  h1 {
    color: rgba(25, 139, 202, 0.7);
    font-size: 2rem;
    margin-bottom: 0.5rem;
    @media (max-width: 414px) {
      font-size: 1.2rem;
    }
  }
  p {
    @media (max-width: 414px) {
      font-size: 0.8rem;
    }
  }
`;
