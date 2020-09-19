import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import userContext from "../../context/user/UserContext";

const NavigationBar = (props) => {
  const UserContext = useContext(userContext);

  const { user_id } = UserContext;

  if (!user_id) return null;

  if (props.location.pathname === "/") return null;

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Link className="navbar-brand" to="/home">
        Med
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/home" className="nav-link">
            home
          </Link>
        </Nav>
        <Nav className="ml-auto">
          <button
            className="nav-item btn btn-outline-secondary"
            onClick={UserContext.userLogout}
          >
            Logout
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(NavigationBar);
