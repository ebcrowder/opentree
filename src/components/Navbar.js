import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

class Navbar extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login</a>
          </li>
        );
      default:
        return [<ul key="1">Hello, {this.props.auth.googleName}!</ul>];
    }
  }

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
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                {this.renderContent()}
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Navbar);
