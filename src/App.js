import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Landing from './landing';
import Navbar from './navbar';
import Movies from './movies';

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

export default () => {
  return (
    <div className="ui container">
      {showLanding()}
      {showMovies()}
    </div>
  )
}
