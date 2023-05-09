import "./App.css"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Activities } from "./Pages/Activities";
import { Profile } from "./Pages/Profile";
import { NavigationBar } from "./NavigationBar";
import { LogIn } from "./Pages/LogIn";

function App() {
  return (

    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Activities' element={<Activities />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/LogIn' element={<LogIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;