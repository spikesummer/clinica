import React, { useState } from "react";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header =()=>{
    const [usuario, setUsuario] = useState(sessionStorage.getItem("email"))

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    const logoff = ()=> {
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("senha");
        window.location.href = "/home";
    }
    return(
        <>
            <div className="col-12 p-3 mb-4 shadow-lg d-flex justify-content-end align-items-center">
                
                <span className="text-secondary fst-italic me-3">Bem vindo, {(usuario.split("@")[0]).toUpperCase()}</span>                
                
                <button onClick={()=>logoff()} className="btn fs-5 text-secondary fst-italic border-0"  data-bs-custom-class="custom-tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Sair">
                    <i className="bi bi-door-open-fill p-0" ></i>
                </button>

            </div>
        </>
    )
}

export default Header;