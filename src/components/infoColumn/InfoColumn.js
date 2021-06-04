/** @format */

import React from "react";
import { SingleArticle } from "./InfoColumnStyles";

const InfoColumn = ({ heading, description }) => {
  return (
    <SingleArticle>
      <h1>{heading}</h1>
      <p>{description}</p>
    </SingleArticle>
  );
};

export default InfoColumn;
