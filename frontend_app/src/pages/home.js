import React, { useEffect, useState } from "react";
import axios from "axios";

import Donor from "../component/Donor/Donor";

const home = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = () => {
    axios.get("/api/v1/donors").then((res) => {
      setDonors(res.data);
    });
  };

  return (
    <>
      {donors.map((donor) => (
        <Donor donor={donor} />
      ))}
    </>
  );
};

export default home;
