import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-light p-5 rounded container mt-5">
        <h1>What is Twitter Clone</h1>
        <p className="lead">
          Twitter is a service for friends, family, and coworkers to communicate
          and stay connected through the exchange of quick, frequent messages.
          People post Tweets, which may contain photos, videos, links, and text.
          These messages are posted to your profile, sent to your followers, and
          are searchable on Twitter search.
        </p>
        <button
          className="btn btn-lg  btn-outline-danger"
          data-bs-toggle="modal"
          href="#exampleModalToggle"
        >
          Sign Up
        </button>
      </div>

      {/* modals */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Sign Up
              </h1>
            </div>
            <div className="modal-body">
              {/* sign up modal goes here */}
              <form className="p-4 p-md-5 border rounded-3 bg-light">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="name"
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="enter you phone no..."
                  />
                  <label htmlFor="floatingInput">Mobile No</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Sign up
                </button>
                <hr className="my-4" />
                <small className="text-muted">
                  By clicking Sign up, you agree to the terms of use.
                </small>
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Already User
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Sign In
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* sign In modal goes here */}
              <form className="p-4 p-md-5 border rounded-3 bg-light">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Sign In
                </button>
                <hr className="my-4" />
                <small className="text-muted">
                  By clicking Sign up, you agree to the terms of use.
                </small>
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back to Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
