import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';
import Pacientes from '../pacientes/Pacientes';
import Relatorios from '../relatorios/Relatorios';
import Agenda from '../agenda/Agenda';
import { Contas_a_pagar } from '../financeiro/contas_a_pagar';
import { Contas_a_receber } from '../financeiro/contas_a_receber';

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
                <Route exact path="/orcamentos" Component={Relatorios}/>
            </Routes>
            <Routes>
                <Route exact path="/agenda" Component={Agenda}/>
            </Routes>
            <Routes>
                <Route exact path="/contas-a-pagar" Component={Contas_a_pagar}/>
            </Routes>
            <Routes>
                <Route exact path="/contas-a-receber" Component={Contas_a_receber}/>
            </Routes>
        </>
    )
}

export default Routers;