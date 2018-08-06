import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import PrivateRoute from '../PrivateRoute';
import history from '../../utils/history';
import ErrorBoundary from '../../components/ErrorBoundary';

// Use React Loadable for routes
import Home from '../Home';
import TweetPage from '../TweetPage';
import Login from '../Login';
import Page404 from '../Page404';

class Root extends React.Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <ErrorBoundary>
        <ConnectedRouter history={history}>
          <Switch>
            <PrivateRoute
              exact
              path="/"
              component={Home}
              isAuthenticated={isAuthenticated}
            />
            <Route path="/tweet/:tweetId" component={TweetPage} />
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
