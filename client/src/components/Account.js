import React, { Component } from 'react';
import Navbar from './Navbar';

import '../style/Account.css';

class Account extends Component {
  render() {
    return (
      <div className="tableframe">
        <Navbar />
        <section className="hero is-fullheight">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-primary">
                      <p className="title">Address</p>
                      <p className="subtitle">
                        12345 Sun River Lane, Portland, OR 97204
                      </p>
                    </article>
                    <article className="tile is-child notification is-warning">
                      <p className="title">Billing Information</p>
                      <p className="subtitle">Visa</p>
                      <p className="subtitle">Card # ending 1234, exp 12/31</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                      <p className="title">Customer Name</p>
                      <p className="subtitle">Member since: 2018</p>
                      <figure className="image is-4by3">
                        <img
                          src="https://bulma.io/images/placeholders/640x480.png"
                          alt="placeholder"
                        />
                      </figure>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-danger">
                    <p className="title">Class History</p>
                    <div className="content">
                      <table className="table is-narrow">
                        <thead>
                          <tr>
                            <th>
                              <abbr title="Date">Date</abbr>
                            </th>
                            <th>
                              <abbr title="Time">Time</abbr>
                            </th>
                            <th>
                              <abbr title="Class">Class</abbr>
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
                          <tr>
                            <td>May 1, 2018</td>
                            <td>8:00 AM</td>
                            <td>Hatha Yoga</td>
                            <td>Jefferson</td>
                            <td>Main</td>
                            <td>1.5 hours</td>
                          </tr>
                          <tr>
                            <td>May 1, 2018</td>
                            <td>12:00 PM</td>
                            <td>Lunch Yoga</td>
                            <td>Franklin</td>
                            <td>Main</td>
                            <td>1 hour</td>
                          </tr>
                          <tr>
                            <td>May 1, 2018</td>
                            <td>3:00 PM</td>
                            <td>Yin Yoga</td>
                            <td>Shanti</td>
                            <td>Main</td>
                            <td>1.5 hours</td>
                          </tr>
                          <tr>
                            <td>May 1, 2018</td>
                            <td>6:00 PM</td>
                            <td>Meditation 101</td>
                            <td>Bob Roth</td>
                            <td>Main</td>
                            <td>2 hours</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                  <div className="content">
                    <p className="title">Billing History</p>
                    <div className="content">
                      <table className="table is-narrow is-hoverable">
                        <thead>
                          <tr>
                            <th>
                              <abbr title="Date">Date</abbr>
                            </th>
                            <th>
                              <abbr title="Time">Amount</abbr>
                            </th>
                            <th>
                              <abbr title="Class">Memo</abbr>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>May 1, 2018</td>
                            <td>$50.00</td>
                            <td>Monthly fee</td>
                          </tr>
                          <tr>
                            <td>June 1, 2018</td>
                            <td>$50.00</td>
                            <td>Monthly fee</td>
                          </tr>
                          <tr>
                            <td>July 1, 2018</td>
                            <td>$50.00</td>
                            <td>Monthly fee</td>
                          </tr>
                          <tr>
                            <td>August 1, 2018</td>
                            <td>$50.00</td>
                            <td>Monthly fee</td>
                          </tr>
                          <tr>
                            <td>September 1, 2018</td>
                            <td>$50.00</td>
                            <td>Monthly fee</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Account;
