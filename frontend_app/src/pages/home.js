import React, { useEffect, useState } from "react";
import axios from "axios";

import Donor from "../component/Donor/Donor";

const home = () => {
  const [donors, setDonors] = useState([]);
  const [bloodGroup, setBloodGroup] = useState(" ");

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = () => {
    axios.get("/api/v1/donors").then((res) => {
      setDonors(res.data);
    });
  };

  const fetchByGroup = () => {
    setDonors([]);
    axios
      .get(`/api/v1/donors/${bloodGroup}`)
      .then((res) => {
        setDonors(res.data);
      })
      .catch((e) => {
        console.error(e);
        toast.error("Uh Oh! some error occured fetching the data");
      });
  };

  return (
    <div className="container mt-5">
      <div className="form-group">
        <label htmlFor="bloodGroup">Search by Blood group</label>
        <select
          className="form-control"
          id="bloodGroup"
          value={bloodGroup ? bloodGroup : " "}
          onChange={(e) => {
            setBloodGroup(e.target.value);
            fetchByGroup();
          }}
        >
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="O+">O+</option>
          <option value="AB+">AB+</option>
          <option value="A-">A-</option>
          <option value="B-">B-</option>
          <option value="O-">O-</option>
          <option value="AB-">AB-</option>
        </select>
      </div>
      <div className="row">
        {donors.map((donor) => (
          <Donor donor={donor} key={donor.email} />
        ))}
      </div>
    </div>
  );
};

export default home;
