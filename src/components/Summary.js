import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCourse } from '../actions';

import '../style/Summary.css';

class Summary extends Component {
  componentDidMount() {
    this.props.fetchCourse();
  }

  renderCourses() {
    return this.props.course.map(item => (
      <div className="container" key={item._id}>
        <li>{item.date}</li>
      </div>
    ));
  }

  render() {
    console.log(this.renderCourses());
    console.log(this.props.course);
    return (
      <div className="tableframe">
        <Navbar />
        <section className="hero is-fullheight">
          {this.renderCourses()}
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>May 1, 2018</td>
                      <td>5:00 AM</td>
                      <td>Ashtanga 1</td>
                      <td>Shanti</td>
                      <td>Main</td>
                      <td>1.5 hours</td>
                    </tr>
                  </tbody>
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
                  <tbody>
                    <tr>
                      <td>May 1, 2018</td>
                      <td>5:00 AM</td>
                      <td>Ashtanga 1</td>
                      <td>Shanti</td>
                      <td>Main</td>
                      <td>1.5 hours</td>
                      <td>
                        <Link to="/SelectedClass">Join</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps({ course }) {
  return { course };
}

export default connect(mapStateToProps, { fetchCourse })(Summary);
