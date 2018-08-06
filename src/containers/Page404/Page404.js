import React from 'react';
import { Link } from 'react-router-dom';

class Page404 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>404</h1>
        <Link to="/">Home</Link>
      </React.Fragment>
    );
  }
}

export default Page404;
