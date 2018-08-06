import React from 'react';

const Header = ({ user, onClick }) => (
  <h1>
    Welcome, {user.username}!<button onClick={onClick}>Logout</button>
  </h1>
);

export default Header;
