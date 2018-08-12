import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { recieveAuth, isAuthenticated } from '../../modules/users';

export class PrivateRoute extends React.Component {
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

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticated(state.users),
});

const mapDispatchToProps = { recieveAuth };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrivateRoute);
