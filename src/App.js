/** @format */

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppWrapper } from "./AppStyles";
import Navbar from "./components/navbar/Navbar";
import GlobalStyles from "./globalStyles";
import { routes } from "./routes";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <AppWrapper>
          <Route exact path={routes.home} component={Home}></Route>
        </AppWrapper>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
