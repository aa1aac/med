import React from "react";

const Donor = ({ donor }) => {
  return (
    <>
      <div
        className="card text-white bg-dark mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">{donor.full_name}</div>
        <div className="card-body">
          <h5 className="card-title">{donor.blood_group}</h5>
          <a className="btn btn-light text-dark" href={`mail:to${donor.email}`}>
            {" "}
            Contact{" "}
          </a>
        </div>
      </div>
    </>
  );
};

export default Donor;
