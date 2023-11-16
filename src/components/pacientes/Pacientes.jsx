import React, { useEffect, useState } from "react";
import Menu from "../menu/Menu";
import Header from "../header/Header";


const Pacientes = props => {
    const [idPaciente, setIdPaciente] = useState(null);
    const [nomePaciente, setNomePaciente] = useState(null);
    const [dNascPaciente, setdNascPaciente] = useState(null);
    const [cpfPaciente, setCpfPaciente] = useState(null);
    const [sexoPaciente, setSexoPaciente] = useState(null);
    const [telPaciente, setTelPaciente] = useState(null);
    const [logradouroPaciente, setLogradouroPaciente] = useState(null);
    const [numeroPaciente, setNumeroPaciente] = useState(null);
    const [cidadePaciente, setCidadePaciente] = useState(null);
    const [estadoPaciente, setEstadoPaciente] = useState(null);
    const [cepPaciente, setCepPaciente] = useState(null);
    const [dentistaPaciente, setDentistaPaciente] = useState("Dr. João Ribeiro");
    const [pacienteList, setPacienteList] = useState([]);

    const salvar = ()=>{

        let pacientesArmazenados = JSON.parse(localStorage.getItem('pacientes')) || [];
                
        const res = {
            id:idPaciente, 
            dadosPaciente:{
                nome: nomePaciente,
                dataNasc: dNascPaciente.split('-').reverse().join('/'), 
                cpf: cpfPaciente,
                sexo: sexoPaciente,
                tel: telPaciente
            },
            endereco:{
                logradouro: logradouroPaciente,
                numero: numeroPaciente,
                cidade: cidadePaciente,
                estado: estadoPaciente,
                cep: cepPaciente
            }, 
            prontuario:{
                dentista: dentistaPaciente,
                tratamento:[]
            }
        };
        res.id = generateNextId(pacientesArmazenados);
        pacientesArmazenados.push(res);

        localStorage.setItem("pacientes", JSON.stringify(pacientesArmazenados));
        setPacienteList(pacientesArmazenados);
        limpaFormulario();
    }

    const limpaFormulario = ()=>{
        setIdPaciente(""); 
        setNomePaciente("");
        setdNascPaciente(""); 
        setCpfPaciente("");
        document.getElementsByName("sexo-form")[0].checked = false
        document.getElementsByName("sexo-form")[1].checked = false
        setTelPaciente("");            
        setLogradouroPaciente("")
        setNumeroPaciente("");
        setCidadePaciente("");
        document.getElementById("select").selectedIndex = 0
        setCepPaciente("");
    }

    function generateNextId(pacientes) {
        // Se não houver pacientes, começa com 1
        if (pacientes.length === 0) {
            return 1;
        }

        // Encontra o último ID utilizado e incrementa
        const ultimoId = pacientes[pacientes.length - 1].id;
        return ultimoId + 1;
    }
    
    const buscar = (e)=>{
        setPacienteList(JSON.parse(localStorage.getItem('pacientes')) || [])
        let res = []
        if(e === ""){
            return setPacienteList(JSON.parse(localStorage.getItem('pacientes')) || [])
        }

        pacienteList.map((paciente) => {                                 
            if(`${paciente.dadosPaciente.nome}`.toLowerCase().includes(`${e}`.toLowerCase())){
                res.push(paciente)
            }
        }
        )
        res.length !== 0 ? setPacienteList(res) : setPacienteList(JSON.parse(localStorage.getItem('pacientes')) || [])              
    }
    
    let estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
   
    useEffect(
        ()=>setPacienteList(JSON.parse(localStorage.getItem('pacientes')) || []), []
    );

    return(
        <>
            {(sessionStorage.getItem("email") === "adriano@email.com" && sessionStorage.getItem("senha") === "123456") || (sessionStorage.getItem("email") === "professor@email.com" && sessionStorage.getItem("senha") === "123456")  ? 
                <div className="container-fluid container-home p-0 m-0">
                    <div className="container-fluid row p-0 m-0 container-home">
                        <Menu/>
                            
                        <div className="col p-3 bg-light">                            
                            <Header/>
                            <div className="row">                                                
                                <div className="col m-2 shadow-lg p-3">
                                    <div className="row ">
                                        <div className="col d-flex align-items-center">
                                        <div className="input-group flex-nowrap">
                                            <span className="input-group-text" id="addon-wrapping"><i className="bi bi-search"></i></span>
                                            <input type="text" className="form-control fst-italic" onChange={(e)=> buscar(e.target.value)} placeholder="Pesquisar paciente" aria-label="pesquisar" aria-describedby="addon-wrapping"/>
                                        </div>                                            
                                            <button type="button" className="btn btn-success ms-3 text-nowrap" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Cadastrar paciente
                                            </button>

                                        </div>
                                    </div>

                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="exampleModal" tabindex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Cadastro de Pacientes</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>limpaFormulario()}></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="form">
                                                
                                                <div className="mb-3 d-flex align-items-baseline">
                                                    <label htmlFor="name-form" className="form-label me-2">Nome:</label>
                                                    <input type="text" className="form-control" id="name-form" required onChange={e =>setNomePaciente(e.target.value)} value={nomePaciente}  aria-describedby="name-form"/>                                                    
                                                </div>
                                                <div className="mb-3 d-flex align-items-baseline">
                                                    <label htmlFor="nasc-form" className="form-label me-2 text-nowrap">Data de Nascimento:</label>
                                                    <input type="date" onChange={e => setdNascPaciente( e.target.value)} value={dNascPaciente} className="form-control w-50" id="nasc-form" aria-describedby="nasc-form"/>                                                    
                                                </div>

                                                <div className="mb-3 d-flex align-items-baseline">
                                                    <label htmlFor="cpf-form" className="form-label me-2">CPF:</label>
                                                    <input type="text" onChange={e => setCpfPaciente( e.target.value)} value={cpfPaciente} required className="form-control w-50" id="cpf-form" maxLength={11} aria-describedby="cpf-form"/>                                                    
                                                </div>                                    

                                                <label className="form-label me-2">Sexo:</label>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" onChange={e => setSexoPaciente( e.target.id)} type="radio" name="sexo-form" id="masculino"/>
                                                    <label className="form-check-label" htmlFor="masculino">Masculino</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" onChange={e => setSexoPaciente( e.target.id)} type="radio" name="sexo-form" id="feminino"/>
                                                    <label className="form-check-label" htmlFor="feminino">Feminino</label>
                                                </div>

                                                {/* ENDEREÇO */}
                                                <div className="mb-3 mt-3 d-flex align-items-baseline">
                                                    <label htmlFor="cep-form" className="form-label me-2">Cep:</label>
                                                    <input type="text" onChange={e =>setCepPaciente(e.target.value)} value={cepPaciente} className="form-control w-25" maxLength={8} id="cep-form" aria-describedby="cep-form"/>                                                    
                                                </div>
                                                <div className="mb-3 mt-3 d-flex align-items-baseline">
                                                    <label htmlFor="logradouro-form" className="form-label me-2">Logradouro:</label>
                                                    <input type="text" onChange={e =>setLogradouroPaciente(e.target.value)} value={logradouroPaciente} className="form-control" id="logradouro-form" aria-describedby="logradouro-form"/>                                                    
                                                </div>
                                                <div className="col d-flex">
                                                    <div className="mb-3 d-flex align-items-baseline ">
                                                        <label htmlFor="numero-form" className="form-label me-2">Número:</label>
                                                        <input type="text" onChange={e =>setNumeroPaciente(e.target.value)} value={numeroPaciente} className="form-control me-1" id="numero-form" aria-describedby="numero-form"/>       
                                                    </div>
                                                    <div className="mb-3 d-flex align-items-baseline ">
                                                        <label htmlFor="tel-form" className="form-label me-2">Telefone:</label>
                                                        <input type="text" onChange={e =>setTelPaciente(e.target.value)} value={telPaciente} className="form-control" maxLength={11} id="tel-form" aria-describedby="tel-form"/>       
                                                    </div>

                                                </div>
                                                <div className="row d-flex flex-row">
                                                    <div className=" col-8 d-flex align-items-baseline  form-check-inline">
                                                        <label htmlFor="cidade-form" className="form-label me-2">Cidade:</label>
                                                        <input type="text" onChange={e =>setCidadePaciente(e.target.value)} value={cidadePaciente} className="form-control" id="cidade-form" aria-describedby="cidade-form"/>       
                                                    </div>
                                                    
                                                    <select className="form-select w-25" id="select" aria-label="Default select example" onChange={e =>setEstadoPaciente(e.target.value)} >
                                                        <option selected>Selecione um Estado</option>
                                                        {
                                                            estados.map((estado, index) => (<option key={index} value= {estado}> {estado}</option>))                                                        
                                                        }
                                                                                                    
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={()=>limpaFormulario()} data-bs-dismiss="modal">Cancelar</button>
                                            <button type="submit" onClick={(e)=>salvar(e)} className="btn btn-primary" data-bs-dismiss="modal">Salvar</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>

                                </div>
                            </div>
                            {/* LISTA DE PACIENTES */}
                            <div className="row mt-3">
                                <div className="col">
                                    <table className="table shadow">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Paciente</th>
                                                <th scope="col-1">D.Nasc.</th>
                                                <th scope="col">Telefone</th>
                                                <th scope="col">CPF</th>
                                                <th scope="col">Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                pacienteList?.map(({id, dadosPaciente:{nome, dataNasc, tel, cpf}}, index)=>{
                                                    return  <tr key={index}>
                                                                <th scope="row">{id}</th>
                                                                <td>{nome}</td>
                                                                <td>{dataNasc}</td>
                                                                <td>{tel}</td>
                                                                <td>{cpf}</td>
                                                                <td>
                                                                    <button className="btn btn-outline-success btn-sm me-1 p-1">Prontuário</button>
                                                                    <button className="btn btn-outline-primary btn-sm me-1 p-1">Editar</button>
                                                                    <button className="btn btn-outline-danger btn-sm me-1 p-1">Excluir</button>
                                                                </td>
                                                            </tr>
                                                })
                                            }
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            : window.location.href = "/"}
        </>
    )
}

export default Pacientes;