import React, { useContext, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Navbar, Nav, Modal } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

import userContext from "../../context/user/UserContext";

const NavigationBar = (props) => {
  const UserContext = useContext(userContext);

  const { user_id, blood_group } = UserContext;

  const [bloodGroup, setBloodGroup] = useState(blood_group);
  const [show, setShow] = useState(false);

  if (!user_id) return null;

  if (props.location.pathname === "/") return null;

  const handleClose = () => setShow(false);

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`/api/v1/user/update`, { blood_group: bloodGroup })
      .then((res) => {
        UserContext.getUser();
        toast.success("blood group aded");
        setShow(false);
      })
      .catch((e) => {
        console.error(e);
        toast.error("some error occured");
      });
  };

  return (
    <>
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

            <button
              className="nav-item btn btn-secondary"
              onClick={() => setShow(true)}
            >
              Update info
            </button>
          </Nav>

          <Nav className="ml-auto">
            <button
              className="nav-item btn btn-secondary m-1"
              onClick={UserContext.userLogout}
            >
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Blood Group </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="bloodGroup">Blood Group</label>
              <select
                className="form-control"
                id="bloodGroup"
                value={bloodGroup ? bloodGroup : " "}
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="AB+">AB+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="O-">O-</option>
                <option value="AB-">AB-</option>
                <option value=" "> -- </option>
              </select>
            </div>

            <button className="btn btn-secondary" type="submit">
              {" "}
              submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default withRouter(NavigationBar);
