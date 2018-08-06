import React from 'react';

const Header = ({ user, onClick }) => (
  <h1>
    {user ? `Welcome, ${user.username}!` : 'Welcome to React Twitter!'}
    {onClick && <button onClick={onClick}>Logout</button>}
  </h1>
);

export default Header;
