/** @format */

import React from "react";
import PhotoGalery from "../components/photoGalery/PhotoGalery";
import { AppHeader } from "./HomeStyles";

const Home = () => {
  return (
    <>
      <AppHeader>
        <h1>Witajcie w VetMed</h1>
        <p>Jesteśmy przychodnią weterynaryjną dla twoich zwierząt. </p>
        <p>
          Posiadamy w swoich zakresie wiele specjalizacji od zwierząt domowych
          typu koty i psy poprzez egzotyczne gady i ptaki.
        </p>
      </AppHeader>

      <PhotoGalery />
    </>
  );
};

export default Home;
