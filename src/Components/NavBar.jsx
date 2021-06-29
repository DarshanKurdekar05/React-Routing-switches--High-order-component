import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
                <Link className="nav-link" to="/education">
                \Education 
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default NavBar;
