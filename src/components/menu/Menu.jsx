import React from "react";
import './style.css';

const Menu = ()=>{
    return(
        <div className="col-md-3 col-lg-3 col-3 col-xl-2 menu">
            <div className="row justify-content-center">
                <div className="col text-center mt-5">
                    <img src="/apple-icon-180x180.png" class="img-fluid col-6" alt="icone"/>
                    <h2 className="mt-3 text-light">Whitetooth</h2>
                </div>
            </div>
            <div className="row mt-5 text-light">
                <div class="vstack gap-2">
                    <div class="p-2 text-light fs-4 hover">
                        <a href="/home">
                            <i className="bi bi-house me-2 text-light"/>
                            Inicio
                        </a>
                    </div>

                    <div class="p-2  fs-4 text-light hover">
                        <a href="/agenda">
                            <i class="bi bi-calendar3 me-2"></i>
                            Agendar
                        </a>
                    </div>
                        
                    <div class="p-2  fs-4 text-light hover">
                        <a href="/pacientes">
                            <i class="bi bi-people me-2"></i>                                    
                            Pacientes
                        </a>
                    </div>                                

                    <div class="p-2  fs-4 text-light hover">
                        <i class="bi bi-graph-up-arrow me-2"></i>
                        Relatórios
                    </div>                                        
                        <div class="vstack gap-1">
                            <div class="p-2 hover ps-4">Consultas realizadas</div>
                            <div class="p-2 hover ps-4">Novos pacientes</div>
                            <div class="p-2 hover ps-4">Orçamentos</div>
                        </div>
                        
                        
                    <div class="p-2  fs-4 text-light hover">
                        <i class="bi bi-cash-coin me-2"></i>
                        Financeiro
                    </div>
                        <div class="vstack gap-1">
                            <div class="p-2 hover ps-4">Contas a Receber</div>
                            <div class="p-2 hover ps-4">Contas a Pagar</div>
                        </div>

                    <div class="p-2  fs-4 text-light hover">
                        <i class="bi bi-gear me-2"></i>
                        Configurações
                    </div>
                        <div class="vstack gap-1 hover">
                            <div class="p-2 ps-4">Cadastrar Funcionário</div>
                        </div>

                </div>
                
            </div>
        </div>
    )
}

export default Menu;