import "./css/App.css"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from "./pages/Home";
import {AboutUs} from "./pages/AboutUs";
import {Activities} from "./pages/Activities";
import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import {LogIn} from "./pages/LogIn";
import {Register} from "./pages/Register"
import {useState} from "react";
import "./css/fonts.css"
import {LobbyCreator} from "./Pages/LobbyCreator";
import {Profile} from "./pages/Profile";

function App() {

    const [currentRoute, setCurrentRoute] = useState('');

    return (

        <div className="App">
            <Router>
                <NavigationBar currentRoute={currentRoute}/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/activities' element={<Activities/>}/>
                    <Route path='/about-us' element={<AboutUs/>}/>
                    <Route path='/login' element={<LogIn/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/lobbyCreator' element={<LobbyCreator/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;