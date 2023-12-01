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
                            <div className="row">
                                <div className="col">
                                <img className="img-fluid rounded" src="female-dentist-with-dentistry-tools-isolated.jpg" alt="foto" style={{maxHeight: 'calc(100hv - 100px)', width: '100%'}} />
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