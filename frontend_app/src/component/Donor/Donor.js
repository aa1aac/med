import React from "react";

const Donor = ({ donor }) => {
  return (
    <div className="card text-white bg-primary m-3 " key={donor.email}>
      <div className="card-header">
        <h4> Blood Group : {donor.blood_group}</h4>
      </div>
      <div className="card-body">
        <h5 className="card-title">{donor.username}</h5>
        <a
          className="btn btn-secondary text-dark"
          href={`mailto:${donor.email}`}
        >
          <i className="fa fa-envelope"></i> Contact{" "}
        </a>
      </div>
    </div>
  );
};

export default Donor;
