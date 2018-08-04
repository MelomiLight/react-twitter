import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { recieveAuth } from '../../modules/users/actions';
import * as fromUsers from '../../modules/users/reducer';

class PrivateRoute extends React.Component {
  componentDidMount() {
    this.props.recieveAuth();
  }

  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  }
}

console.log(fromUsers);

const mapStateToProps = state => ({
  isAuthenticated: fromUsers.isAuthenticated(state.users),
});

const mapDispatchToProps = { recieveAuth };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PrivateRoute),
);
