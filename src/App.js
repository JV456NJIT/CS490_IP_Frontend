import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Landing from './landing';

const showLanding = () => {
  if ((window.location.pathname === "/App.js") || (window.location.pathname === "/")) {
    return <> <Landing /> </>
  }
}

export default () => {
  return (
    <div className="ui container">
      {showLanding()}
    </div>
  )
}
