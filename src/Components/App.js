import React from 'react';
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; */

import Landing from './LandingFolder/Landing';
import NavBar from './NavBarFolder/NavBar';
import Footer from './FooterLandingFolder/FooterLanding'


import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Landing />

      <Footer />
    </div>
  );
}

export default App;
