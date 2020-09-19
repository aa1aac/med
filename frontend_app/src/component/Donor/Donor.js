import React from "react";

const Donor = ({ donor }) => {
  return (
    <div
      className="card text-white bg-dark m-3 "
      style={{ maxWidth: "19rem" }}
      key={donor.email}
    >
      <div className="card-header">{donor.full_name}</div>
      <div className="card-body">
        <h5 className="card-title"> Blood Group : {donor.blood_group}</h5>
        <a
          className="btn btn-secondary text-dark"
          href={`mailto:${donor.email}`}
        >
          {" "}
          Contact{" "}
        </a>
      </div>
    </div>
  );
};

export default Donor;
