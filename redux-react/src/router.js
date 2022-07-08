import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container1 from "./containers/Container1";
import Component1 from "./functional/Component1";
import Component2 from "./functional/Component2";
import Component3 from "./functional/Component3";
import Header from "./containers/Header";
import history from "./utils/history";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes history={history}>
          <Route path='/' element={<Container1 />} />
          <Route path='/component1' element={<Component1 />} />
          <Route path='/component2' element={<Component2 />} />
          <Route path='/component3' element={<Component3 />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default Router;