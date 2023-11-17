import React from "react";
import './style.css';
import Menu from '../menu/Menu';
import Header from "../header/Header";
import Calendario from "../calendario/Calendario";

const Home = props =>{
    return(
        <>
            {(sessionStorage.getItem("email") === "adriano@email.com" && sessionStorage.getItem("senha") === "123456") || (sessionStorage.getItem("email") === "professor@email.com" && sessionStorage.getItem("senha") === "123456")  ? 
                <div className="container-fluid container-home p-0 m-0">
                    <div className="container-fluid row p-0 m-0 container-home">
                        {/* MENU */}
                        <Menu/>
                        <div className="col p-3 bg-light">
                            <Header/>
                            <div className="row  p-2 pt-3">
                                <div className="col-7 col-lg-8 col-xl-8">
                                    <Calendario/>
                                </div>
                                <div className="col-5 col-lg-4 col-xl-4">
                                    <h3 className="text-center text-secondary fst-italic">Agenda do dia</h3>
                                    <hr />
                                    <div className="card mb-3 p-2 border-5 border-end-0 border-bottom-0 border-top-0  border-success shadow-sm">
                                        <h5 className="text-secondary">consulta 1</h5>
                                        <span className="text-secondary fst-italic">12:00h</span>
                                    </div>
                                    <div className="card mb-3 p-2 border-5 border-start-1 border-end-0 border-bottom-0 border-top-0  border-success shadow-sm">
                                        <h5 className="text-secondary">consulta 1</h5>
                                        <span className="text-secondary fst-italic">13:00h</span>
                                    </div>
                                    <div className="card mb-3 p-2 border-5 border-start-1 border-end-0 border-bottom-0 border-top-0  border-success shadow-sm">
                                        <h5 className="text-secondary">consulta 1</h5>
                                        <span className="text-secondary fst-italic">13:00h</span>
                                    </div>
                                    <div className="card mb-3 p-2 border-5 border-start-1 border-end-0 border-bottom-0 border-top-0  border-success shadow-sm">
                                        <h5 className="text-secondary">consulta 1</h5>
                                        <span className="text-secondary fst-italic">13:00h</span>
                                    </div>
                                    <div className="card mb-3 p-2 border-5 border-start-1 border-end-0 border-bottom-0 border-top-0  border-success shadow-sm">
                                        <h5 className="text-secondary">consulta 1</h5>
                                        <span className="text-secondary fst-italic">13:00h</span>
                                    </div>
                                    <div className="card mb-3 p-2 border-5 border-start-1 border-end-0 border-bottom-0 border-top-0  border-success shadow-sm">
                                        <h5 className="text-secondary">consulta 1</h5>
                                        <span className="text-secondary fst-italic">13:00h</span>
                                    </div>
                                    <div className="card mb-3 p-2 border-5 border-start-1 border-end-0 border-bottom-0 border-top-0  border-success shadow-sm">
                                        <h5 className="text-secondary">consulta 1</h5>
                                        <span className="text-secondary fst-italic">13:00h</span>
                                    </div>
                                    <div className="card mb-3 p-2 border-5 border-start-1 border-end-0 border-bottom-0 border-top-0  border-success shadow-sm">
                                        <h5 className="text-secondary">consulta 1</h5>
                                        <span className="text-secondary fst-italic">13:00h</span>
                                    </div>
                                    <div className="card mb-3 p-2 border-5 border-start-1 border-end-0 border-bottom-0 border-top-0  border-success shadow-sm">
                                        <h5 className="text-secondary">consulta 1</h5>
                                        <span className="text-secondary fst-italic">13:00h</span>
                                    </div>
                                    <div className="card mb-3 p-2 border-5 border-start-1 border-end-0 border-bottom-0 border-top-0  border-success shadow-sm">
                                        <h5 className="text-secondary">consulta 1</h5>
                                        <span className="text-secondary fst-italic">13:00h</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            : window.location.href = "/"}
        </>
    )
}

export default Home;