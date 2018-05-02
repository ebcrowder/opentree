import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCourse, fetchUser } from '../actions';
import _ from 'lodash';

import '../style/Summary.css';

class Summary extends Component {
  componentDidMount() {
    this.props.fetchCourse();
    this.props.fetchUser();
  }

  renderCourses() {
    const data = this.props.course;
    return Object.keys(data).map(key => {
      return (
        <tr className="itemlist" key={data[key]._id}>
          <td>{data[key].date}</td>
          <td>{data[key].time}</td>
          <td>{data[key].course}</td>
          <td>{data[key].teacher}</td>
          <td>{data[key].room}</td>
          <td>{data[key].duration}</td>
          <td>
            <Link to={`/selectedclass/${data[key]._id}`}>Join</Link>
          </td>
        </tr>
      );
    });
  }

  renderJoinCourses() {
    const data = this.props.course;
    const auth = _.values(this.props.auth);

    return Object.keys(data).map(key => {
      if (data[key].users == auth[0]) {
        return (
          <tr className="itemlist" key={data[key]._id}>
            <td>{data[key].date}</td>
            <td>{data[key].time}</td>
            <td>{data[key].course}</td>
            <td>{data[key].teacher}</td>
            <td>{data[key].room}</td>
            <td>{data[key].duration}</td>
          </tr>
        );
      } else {
        return null;
      }
    });
  }

  render() {
    return (
      <div className="tableframe">
        <Navbar />
        <section className="hero is-fullheight">
          <div className="tile is-parent">
            <article className="tile is-child notification is-dark">
              <p className="title">Class Schedule</p>
              <div className="content">
                <table className="table is-hoverable">
                  <thead>
                    <tr>
                      <th>
                        <abbr className="sch" title="Date">
                          Date
                        </abbr>
                      </th>
                      <th>
                        <abbr className="sch" title="Time">
                          Time
                        </abbr>
                      </th>
                      <th>
                        <abbr className="sch" title="class">
                          Class
                        </abbr>
                      </th>
                      <th>
                        <abbr className="sch" title="Teacher">
                          Teacher
                        </abbr>
                      </th>
                      <th>
                        <abbr className="sch" title="Room">
                          Room
                        </abbr>
                      </th>
                      <th>
                        <abbr className="sch" title="Duration">
                          Duration
                        </abbr>
                      </th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>{this.renderJoinCourses()}</tbody>
                </table>
              </div>
            </article>
          </div>

          <div className="tile is-parent">
            <article className="tile is-child notification is-primary">
              <p className="title">Available Classes</p>
              <div className="content">
                <table className="table-available is-hoverable">
                  <thead>
                    <tr>
                      <th>
                        <abbr title="Date">Date</abbr>
                      </th>
                      <th>
                        <abbr title="Time">Time</abbr>
                      </th>
                      <th>
                        <abbr title="class">Class</abbr>
                      </th>
                      <th>
                        <abbr title="Teacher">Teacher</abbr>
                      </th>
                      <th>
                        <abbr title="Room">Room</abbr>
                      </th>
                      <th>
                        <abbr title="Duration">Duration</abbr>
                      </th>
                      <th>
                        <abbr title="Join">Join</abbr>
                      </th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCourses()}</tbody>
                </table>
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps({ course, auth }) {
  return { course, auth };
}

export default connect(mapStateToProps, { fetchCourse, fetchUser })(Summary);
