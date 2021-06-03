/** @format */

import React from "react";
import { Galery, Photo, WrapperForPhoto } from "./PhotoGaleryStyles";
import SmileDog from "../../assets/photos/smileDog.jpg";
import SmileCat from "../../assets/photos/smileCat.jpg";
import SmileParrot from "../../assets/photos/parrot.jpg";
import SmileTutrle from "../../assets/photos/turtle.jpg";
import SmileLizard from "../../assets/photos/lizard.jpg";
import NormalDog from "../../assets/photos/normalDog.jpg";
import NormalCat from "../../assets/photos/normalCat.jpg";
import Raccoon from "../../assets/photos/raccoon.jpg";
import Hamster from "../../assets/photos/hamster.jpg";

const PhotoGalery = () => {
  return (
    <Galery>
      <WrapperForPhoto>
        <Photo src={SmileDog} />
        <Photo src={SmileCat} />
        <Photo src={SmileParrot} />
        <Photo src={SmileTutrle} />
        <Photo src={SmileLizard} />
        <Photo src={NormalDog} />
        <Photo src={NormalCat} />
        <Photo src={Raccoon} />
        <Photo src={Hamster} />
      </WrapperForPhoto>
    </Galery>
  );
};

export default PhotoGalery;
