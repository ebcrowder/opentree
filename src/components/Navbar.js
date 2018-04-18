import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-medium is-dark is-bold">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <span role="img" aria-label="tree">
                🌲
              </span>
            </Link>
          </div>

          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link to="/account">
                    <span className="button is-primary is-outlined">
                      <i className="fas fa-id-card" />
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
