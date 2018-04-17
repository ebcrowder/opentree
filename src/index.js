import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Login from './components/Login';
import Summary from './components/Summary';
import Account from './components/Account';

import 'bulma/css/bulma.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/account" component={Account} />
        <Route path="/summary" component={Summary} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
