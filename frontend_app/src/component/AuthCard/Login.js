import React, { useState, useContext } from "react";

import userContext from "../../context/user/UserContext";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const UserContext = useContext(userContext);

  const onLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      UserContext.userLogin({ email, password });
    }
  };

  return (
    <div>
      <h5 className="mb-2">Login</h5>
      <form onSubmit={onLogin}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          <i className="fa fa-user"> </i> Login
        </button>
      </form>
    </div>
  );
};

export default Login;
