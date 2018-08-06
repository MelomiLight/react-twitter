import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, signin } from '../../modules/users/actions';
import * as fromUsers from '../../modules/users/reducer';

class Login extends React.Component {
  input = null;

  onSubmit = event => {
    event.preventDefault();
    const { value } = this.input;

    if (!value.trim()) {
      return;
    }
    this.props.login(value);
    this.input.value = '';
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Your username"
            ref={ref => (this.input = ref)}
          />
          <button type="submit">Sign In</button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: fromUsers.isAuthenticated(state.users),
});

const mapDispatchToProps = { login, signin };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
