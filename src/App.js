import "./Css/App.css"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Activities } from "./Pages/Activities";
import { NavigationBar } from "./NavigationBar";
import { LogIn } from "./Pages/LogIn";
import {Register} from "./Pages/Register"
import { useState } from "react";
import "./Css/fonts.css"
import {Profile} from "./Pages/Profile";

function App() {

  const [currentRoute, setCurrentRoute] = useState('');

  return (

    <div className="App">
      <Router>
        <NavigationBar currentRoute={currentRoute}/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Activities' element={<Activities />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
