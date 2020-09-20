import React from "react";

const Donor = ({ donor }) => {
  return (
    <div
      className="card text-white bg-primary m-3 "
      // style={{ maxWidth: "19rem" }}
      key={donor.email}
    >
      <div className="card-header">
        <h4> Blood Group : {donor.blood_group}</h4>
      </div>
      <div className="card-body">
        <h5 className="card-title">{donor.full_name}</h5>
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
