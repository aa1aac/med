import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";

const Donor = ({ donor }) => {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  const onContact = () => {
    toast.info("please wait while we are contacting the person");
    axios
      .get(`/api/v1/send_mail/${donor.email}`)
      .then((res) => {
        toast.success(
          "Great! we've notified him/her. You will hear from them if they are willing "
        );
      })
      .catch((e) => {
        console.error(e);
        toast.error("some error ocured sending the email");
      });
  };
  return (
    <div className="card text-white bg-primary m-3 " key={donor.email}>
      <div className="card-header">
        <h4> Blood Group : {donor.blood_group}</h4>
      </div>
      <div className="card-body">
        <h5 className="card-title">{donor.full_name}</h5>
        <button className="btn btn-secondary text-dark" onClick={handleOpen}>
          <i className="fa fa-envelope"></i> Contact{" "}
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Contact confirmation </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            {" "}
            Are you sure that you want to contact {donor.full_name} for blood ?{" "}
          </h4>

          <button className="btn btn-primary" onClick={onContact}>
            {" "}
            Yes{" "}
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Donor;
