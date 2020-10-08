import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/Firebase/PrivateRoute";
import UserContextProvider from "./components/Firebase/UserContextProvider";
import Home from "./components/Home/Home";
import Optimizer from "./components/Optimizer/Optimizer";

export default function App() {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Switch>
            <PrivateRoute path="/Optimizer" component={Optimizer} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}
