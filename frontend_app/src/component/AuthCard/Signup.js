import React, { useState, useContext } from "react";

import userContext from "../../context/user/UserContext";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const UserContext = useContext(userContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (name && email && password && confirm) {
      UserContext.userSignup({
        full_name: name,
        email,
        password1: password,
        password2: confirm,
      });
    }
  };

  return (
    <div>
      <h5 className="mb-2">Signup</h5>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control "
            id="name"
            placeholder="Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control "
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control "
            id="password"
            placeholder="Password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            type="password"
            className="form-control "
            id="confirm"
            placeholder="Confirm Password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          <i className="fa fa-user-plus"> </i> Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
