/** @format */

import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import GlobalStyles from "./globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
