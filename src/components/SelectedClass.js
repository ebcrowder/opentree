import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../style/SelectedClass.css';

class SelectedClass extends Component {
  render() {
    return (
      <div className="boxframe">
        <div className="box">
          <div className="card">
            <div className="card-content">
              <p className="title">Yoga class name</p>
              <p className="subtitle">description</p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <span>
                  <Link to="/Summary">Attend</Link>
                </span>
              </p>
              <p className="card-footer-item">
                <span>
                  Back to
                  <Link to="/Summary"> Schedule</Link>
                </span>
              </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectedClass;
