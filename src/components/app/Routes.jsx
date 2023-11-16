import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';
import Pacientes from '../pacientes/Pacientes';
import Relatorios from '../relatorios/Relatorios';

const Routers = props => {
    return(
       <>
            <Routes>
                <Route exact path="/" Component={Login}/>
            </Routes>
            <Routes>
                <Route exact path="/home" Component={Home}/>
            </Routes>
            <Routes>
                <Route exact path="/pacientes" Component={Pacientes}/>
            </Routes>
            <Routes>
                <Route exact path="/relatorios" Component={Relatorios}/>
            </Routes>
        </>
    )
}

export default Routers;