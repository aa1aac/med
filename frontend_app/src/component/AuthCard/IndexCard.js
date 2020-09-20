import React, { useState } from "react";

import Login from "./Login";
import Signup from "./Signup";

const IndexCard = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card ">
        <div className="card-body">
          <h3 className="card-title">Raktadaan</h3>
          <p className="card-text">Raktadaan: get your medical help</p>
        </div>

        <div className="card-body">
          {isLogin ? <Login /> : <Signup />}
          <p className="text-center">Or,</p>

          <button
            className="btn btn-block btn-outline-info"
            onClick={() => setIsLogin(!isLogin)}
          >
            {" "}
            {isLogin ? "Signup" : "Login"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndexCard;
