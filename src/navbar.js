import './navbar.css';
import React from 'react';

const navbar = () => {
  return (
    <nav>
      <div id="bar">
        <div id="item"><a href="./App.js">Home</a></div>
        <div id="item"><a href="./Movies.js">Movies</a></div>
        <div id="item"><a href="./Customers.js">Customers</a></div>
        <div id="item"><a href="/">Reports</a></div>
      </div>
    </nav>
  );
};

export default navbar;