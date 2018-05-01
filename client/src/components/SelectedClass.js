import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCourseByID, joinCourseByID, fetchUser } from '../actions';
import _ from 'lodash';

import '../style/SelectedClass.css';

class SelectedClass extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCourseByID(id);
    this.props.fetchUser();
  }

  onSubmit() {
    const { id } = this.props.match.params;
    const auth = _.values(this.props.auth, key => {
      return key;
    });

    this.props.joinCourseByID(id, auth[0], () => {
      this.props.history.push('/summary');
    });
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
                  <a onClick={this.onSubmit.bind(this)}>Attend</a>
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

function mapStateToProps({ course, auth }, ownProps) {
  return { course: course[ownProps.match.params.id], auth };
}

export default connect(mapStateToProps, {
  fetchCourseByID,
  joinCourseByID,
  fetchUser
})(SelectedClass);
