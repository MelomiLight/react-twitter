import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from '../../utils/history';
import ErrorBoundary from '../ErrorBoundary';
// Use React Loadable for routes
import Home from '../Home';
import Login from '../Login';
import Page404 from '../Page404';

class Root extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/404" component={Page404} />
            <Redirect to="/404" />
          </Switch>
        </ConnectedRouter>
      </ErrorBoundary>
    );
  }
}

export default Root;
