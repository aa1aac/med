import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("signup");
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

        {/* <div className="form-group">
          <label htmlFor="name">Blood Group</label>
          <input
            value={type}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control "
            id="name"
            placeholder="blood type"
            
          />
        </div> */}

        <button type="submit" className="btn btn-primary btn-block">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
