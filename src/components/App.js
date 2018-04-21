import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Login from './Login';
import Summary from './Summary';
import Account from './Account';
import SelectedClass from './SelectedClass';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/selectedclass" component={SelectedClass} />
            <Route path="/account" component={Account} />
            <Route path="/summary" component={Summary} />
            <Route path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
