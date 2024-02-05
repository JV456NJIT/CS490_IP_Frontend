import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Navbar from './navbar';
import Landing from './landing';
import Movies from './movies';
import Customers from './customers';

const showLanding = () => {
  if ((window.location.pathname === "/App.js") || (window.location.pathname === "/")) {
    return <> <Navbar/> <Landing/> </>
  }
}

const showMovies = () => {
  if (window.location.pathname === "/Movies.js") {
    return <> <Navbar/> <Movies /> </>
  }
}

const showCustomers = () => {
  if (window.location.pathname === "/Customers.js") {
    return <> <Navbar/> <Customers /> </>
  }
}

export default () => {
  return (
    <div className="ui container">
      {showLanding()}
      {showMovies()}
      {showCustomers()}
    </div>
  )
}