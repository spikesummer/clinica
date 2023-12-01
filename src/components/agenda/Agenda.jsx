import React, {useContext, useState} from "react";
import Menu from "../menu/Menu";
import Header from "../header/Header";
import Calendario from "../calendario/Calendario";

import { dateContext } from "../../context/themeContext";

const Agenda = props => {
    const {date} = useContext(dateContext);
    const dataBd = JSON.parse(localStorage.getItem("pacientes"));
    const [horario, setHorario] = useState("");
    const [dentista, setDentista] = useState("");
    const [datePaciente, setDatePaciente] = useState();
    const [pacienteAgenda, setPacienteAgenda] = useState("");
    const [tratamento, setTratamento] = useState("");

    const dentistas = ["Dr. Alberto Tavares", "Dr. João Carlos Silva", "Dr.Alexandre Ferraz", "Dra. Bianca Costa"];
    const horarios = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

    const criarConsulta = (e) =>{
        e.preventDefault();
        dataBd.map((registro)=>{
            if(registro.dadosPaciente.nome.toLowerCase().includes(pacienteAgenda)){
                registro.prontuario.data = datePaciente
                registro.prontuario.hora = horario
                registro.prontuario.dentista = dentista
                registro.prontuario.tratamento = tratamento
            }
        })

        localStorage.setItem("pacientes", JSON.stringify(dataBd))
    }

    console.log(dataBd[1].prontuario.data.slice(-2));

    //date === dataBd.prontuario.data.slice(-2) "8:00" && "dentista" print
 
    // const agendatable = ()=>{
    //     const table = [];
       
    //     dataBd.map((registro)=>{
    //         horarios.forEach((item, index)=>{
    //             if(registro.prontuario.data.slice(-2) === date){
    //                 if(registro.prontuario.hora === item){
    //                     table.push(`{${item}, ${registro.dadosPaciente.nome}, ${registro.prontuario.dentista}}`)
    //                 }
    //             }
    //         })
    //     })
    //     console.log(table);
    // }
    // agendatable();

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
                        <div className="col flex-col text-end mb-3">
                            <h5 className="me-3 fst-italic text-secondary" >Agenda</h5>
                            <hr />
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col shadow  p-3">
                            <button className="btn btn-primary d-flex align-itens-center fs-5" data-bs-toggle="modal" data-bs-target="#cadastroAgenda">
                                <i className="bi bi-plus me-2"></i>
                                Criar nova consulta
                            </button>
                        </div>
                    </div>

                    {/* MODAL */}
                        <div className="modal" id="cadastroAgenda" tabIndex="-1"  aria-labelledby="cadastroAgenda" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Criar Consulta</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                                    </div>

                                    <div className="modal-body">
                                        
                                        <div className="mb-3 d-flex align-items-baseline">
                                            <label htmlFor="name-form" className="form-label me-2">Nome:</label>
                                            <input type="text" className="form-control" id="name-form" onChange={e =>setPacienteAgenda(e.target.value)} value={pacienteAgenda} aria-describedby="name-form"/>                                                    
                                        </div>

                                        <div className="mb-3 d-flex align-items-baseline">
                                            <label htmlFor="nasc-form" className="form-label me-2 text-nowrap">Data:</label>
                                            <input type="date"  className="form-control w-50" onChange={e =>setDatePaciente(e.target.value)} value={datePaciente} id="nasc-form" aria-describedby="nasc-form"/>                                                    
                                        </div>

                                        <label htmlFor="horario" className="mb-1">Horário</label>
                                        <select className="form-select w-50 mb-2" id="horario" aria-label="horario" value={horario} onChange={e =>setHorario(e.target.value)} >
                                            
                                            {
                                                horarios.map((horario, index) => (<option key={index} value= {horario}> {horario}</option>))                                                        
                                            }                                              
                                        </select>
                                        <label htmlFor="dentista" className="mb-1">Dentistas</label>
                                        <select className="form-select w-50 mb-2" id="dentista" aria-label="Dentistas" onChange={e =>setDentista(e.target.value)} >
                                            {
                                                dentistas.map((dentista, index) => (<option key={index} value= {dentista}> {dentista}</option>))                                                        
                                            }                                              
                                        </select>

                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Tratamento" id="floatingTextarea" onChange={e=>{setTratamento(e.target.value)}}></textarea>
                                            <label htmlFor="floatingTextarea">Tratamento</label>
                                        </div>

                                    </div>
                                    <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"  data-bs-dismiss="modal">Cancelar</button>
                                            <button type="submit" className="btn btn-primary" onClick={(e)=>{criarConsulta(e)}} data-bs-dismiss="modal">Salvar</button>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    {/* FIM MODAL*/}
                    <div className="row m-0 mt-5">
                        <div className="col-4 " style={{maxWidth: '24rem'}}>
                            <Calendario/>
                        </div>
                        <div className="col-8">
                            {/* tabela */}
                            <h3 className="text-center text-secondary fst-italic">Agenda do dia {date}</h3>
                            <hr />
                            <div className="col">
                                <table className="table shadow text-center" style={{overflowY:'scroll'}}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Dentistas</th>
                                            <th scope="col">Dr. Alberto Tavares</th>
                                            <th scope="col">Dr. João Carlos Silva</th>
                                            <th scope="col">Dr. Alexandre Ferraz</th>
                                            <th scope="col">Dra. Bianca Costa</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{fontSize: '0.8rem'}}>
                                        
                                        <tr >
                                            <th scope="row">8:00</th>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>Maria Silva almeida</td>
                                            <td>Maria Silva almeida</td>
                                        </tr>
                                        <tr >
                                            <th scope="row">9:00</th>
                                            <td>Maria Silva almeida</td>
                                            <td>Maria Silva almeida</td>
                                            <td>Flavio Carvalho</td>
                                            <td>Maria Silva almeida</td>
                                        </tr>
                                        <tr >
                                            <th scope="row">10:00</th>
                                            <td>Maria Silva almeida</td>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>Maria Silva almeida</td>
                                        </tr>
                                        <tr >
                                            <th scope="row">11:00</th>
                                            <td>Maria Silva almeida</td>
                                            <td>João Melo</td>
                                            <td>Maria Silva almeida</td>
                                            <td>Maria Silva almeida</td>
                                        </tr>
                                        <tr >
                                            <th scope="row">12:00</th>
                                            <td>Maria Silva almeida</td>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>--</td>
                                        </tr>
                                        <tr >
                                            <th scope="row">13:00</th>
                                            <td>Maria Silva almeida</td>
                                            <td>Maria Silva almeida</td>
                                            <td>Maria Silva almeida</td>
                                            <td>Maria Silva almeida</td>
                                        </tr>
                                        <tr >
                                            <th scope="row">14:00</th>
                                            <td>Maria Silva almeida</td>
                                            <td>Maria Silva almeida</td>
                                            <td>Maria Silva almeida</td>
                                            <td>Maria Silva almeida</td>
                                        </tr>
                                        <tr >
                                            <th scope="row">15:00</th>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>--</td>
                                        </tr>
                                        <tr >
                                            <th scope="row">16:00</th>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>--</td>
                                        </tr>
                                        <tr >
                                            <th scope="row">17:00</th>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>--</td>
                                        </tr>
                                       
                                    </tbody>
                                </table>
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

export default Agenda;