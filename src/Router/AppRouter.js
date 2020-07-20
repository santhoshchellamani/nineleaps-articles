import React, { Fragment } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Posts from "../Components/Posts/Posts";
import FileNotFound from "../Globals/Filenotfound";
import FullPost from "../Components/FullPost/FullPost";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class AppRouter extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Articles</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/posts/" exact className="nav-link" role="button">
                List Articles
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/posts" exact component={Posts} />
          <Route path={"/posts/:id"} exact component={FullPost} />
          <Route component={FileNotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRouter;
