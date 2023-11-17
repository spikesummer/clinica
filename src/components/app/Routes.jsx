import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';
import Pacientes from '../pacientes/Pacientes';
import Relatorios from '../relatorios/Relatorios';
import Agenda from '../agenda/Agenda';

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
            <Routes>
                <Route exact path="/agenda" Component={Agenda}/>
            </Routes>
        </>
    )
}

export default Routers;