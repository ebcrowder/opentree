import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCourseByID } from '../actions';

import '../style/SelectedClass.css';

class SelectedClass extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCourseByID(id);
  }

  render() {
    const { course } = this.props;

    if (!course) {
      return <div>Loading...</div>;
    }
    return (
      <div className="boxframe">
        <div className="box">
          <div className="card">
            <div className="card-content">
              <p className="title">{course.course}</p>
              <p className="subtitle">date: {course.date}</p>
              <p className="subtitle">time: {course.time}</p>
              <p className="subtitle">teacher: {course.teacher}</p>
              <p className="subtitle">room: {course.room}</p>
              <p className="subtitle">duration: {course.duration}</p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <span>
                  <Link to="/summary">Attend</Link>
                </span>
              </p>
              <p className="card-footer-item">
                <span>
                  Back to
                  <Link to="/summary"> Schedule</Link>
                </span>
              </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ course }, ownProps) {
  return { course: course[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchCourseByID })(SelectedClass);
