import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Homepage from "./homepage/index";
import Blog from "./homepage/Blog";
import Contact from "./homepage/Contact";
import Error from "./homepage/Error";
import BlogDetail from "./homepage/BlogDetail";
import About from "./homepage/About";
import Portofolio from "./homepage/Portofolio";
import Service from "./homepage/Service";
import Price from "./homepage/Pricing";

const Index = (props) => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/portofolio">
            <Portofolio />
          </Route>
          <Route exact path="/service">
            <Service />
          </Route>
          <Route exact path="/price">
            <Price />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/error">
            <Error />
          </Route>
          <Route exact path="/blog-detail">
            <BlogDetail />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Index;
