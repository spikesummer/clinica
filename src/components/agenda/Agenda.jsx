import React from "react";
import Menu from "../menu/Menu";
import Header from "../header/Header";

const Agenda = props => {
    return(
        <>
         {(sessionStorage.getItem("email") === "adriano@email.com" && sessionStorage.getItem("senha") === "123456") || (sessionStorage.getItem("email") === "professor@email.com" && sessionStorage.getItem("senha") === "123456")  ? 
        
        <div className="container-fluid container-home p-0 m-0">
            <div className="container-fluid row p-0 m-0 container-home">
                {/* MENU */}
                <Menu/>
                <div className="col p-3 bg-light">
                    <Header/>
                </div>
            </div>
        </div>

        : window.location.href = "/"}
        </>
    )
}

export default Agenda;