import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';

const Routers = props => {
    return(
       <>
            <Routes>
                <Route exact path="/" Component={Login}/>
            </Routes>
            <Routes>
                <Route exact path="/home" Component={Home}/>
            </Routes>
        </>
    )
}

export default Routers;