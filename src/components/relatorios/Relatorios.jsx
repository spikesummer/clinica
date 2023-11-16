import React from "react";
import Menu from "../menu/Menu";

const Relatorios = props => {
    return(
        <>
            {(sessionStorage.getItem("email") === "adriano@email.com" && sessionStorage.getItem("senha") === "123456") || (sessionStorage.getItem("email") === "professor@email.com" && sessionStorage.getItem("senha") === "123456")  ? 
                <div className="container-fluid container-home p-0 m-0">
                    <div className="container-fluid row p-0 m-0 container-home">
                        <Menu/>
                        <div className="col bg-warning">
                            <h1>Relatorios</h1>{/*aqui fica o codigo do lado direito*/}
                        </div>
                    </div>                    
                </div>
            : window.location.href = "/"}
        </>
    )
}

export default Relatorios;