import React from 'react';

class Login extends React.Component {
  input = null;

  onSubmit = event => {
    event.preventDefault();
    const { value } = this.input;

    if (!value.trim()) {
      return;
    }

    this.input.value = '';
  };

  render() {
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

export default Login;
