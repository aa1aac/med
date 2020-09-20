import React from "react";

import { Link } from "react-router-dom";

import AuthCard from "../component/AuthCard/IndexCard";

const IndexPage = () => {
  return (
    <>
      <div className="index_hero">
        <div className="container">
          <nav className="d-flex justify-content-between">
            <h1>
              {" "}
              Raktadaan <i className="fa fa-ambulance"> </i>{" "}
            </h1>
          </nav>

          <AuthCard />
        </div>
      </div>

      {/* find blood */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2>Find blood</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
          <img
            src="/static/frontend/image/2.jpg"
            className="col-sm-12 col-md-6 col-lg-6 "
            alt="find blood"
          />
        </div>
      </div>

      {/* find doctors */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2>Find doctors</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>

          <img
            src="/static/frontend/image/3.jpg"
            className="col-sm-12 col-md-6 col-lg-6"
            alt="find doctors"
          />
        </div>
      </div>

      {/* manage your resource */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2>Manage resource </h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
          <img
            src="/static/frontend/image/4.jpg"
            className="col-sm-12 col-md-6 col-lg-6 "
            alt="manage resource "
          />
        </div>
      </div>

      {/* get help  */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2>Get help </h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>

          <img
            src="/static/frontend/image/5.jpg"
            className="col-sm-12 col-md-6 col-lg-6 "
            alt="get help"
          />
        </div>
      </div>

      {/* footer */}
      <ul className="nav justify-content-center mt-5 bg-primary text-white p-lg-3">
        copyright © {new Date().getFullYear()}
      </ul>
    </>
  );
};

export default IndexPage;
