import React, { Component } from 'react';
import '../style/Login.css';

class Login extends Component {
  render() {
    return (
      <div className="loginframe">
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="titlemoji">
                <span role="img" aria-label="tree">
                  🌲
                </span>
              </div>
              <h1 className="title">tree</h1>
              <h2 className="subtitle">yoga studio software</h2>

              <div className="box">
                <div className="field">
                  <p className="control">
                    <a href="/auth/google" className="button is-danger">
                      Login with Google
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
