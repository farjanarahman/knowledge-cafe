import React from "react";


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary mt-3">
        <div className="container px-md-5">
          <div className="px-md-5">
            <a className="navbar-brand fs-2 fw-bolder" href="#">
              Programmers Club
            </a>
          </div>
          <div className="px-md-5">
            <div
              className="d-md-flex justify-content-md-end gap-3"
              id="navbarNav"
            >
              <div>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                  className="card-img-top rounded-circle"
                  alt="farjana"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container px-md-5 w-75">
        <hr />
      </div>
    </>
  );
};

export default Header;
