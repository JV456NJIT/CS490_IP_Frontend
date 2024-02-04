import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Landing from './landing';
import Navbar from './navbar';

const showLanding = () => {
  if ((window.location.pathname === "/App.js") || (window.location.pathname === "/")) {
    return <> <Navbar/> <Landing/> </>
  }
}

export default () => {
  return (
    <div className="ui container">
      {showLanding()}
    </div>
  )
}
