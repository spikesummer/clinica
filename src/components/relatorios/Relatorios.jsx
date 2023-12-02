import React, { useEffect, useState } from "react";
import Menu from "../menu/Menu";
import Header from "../header/Header";

const Relatorios = props => {
    const [idPaciente, setIdPaciente] = useState("");
    const [nomePaciente, setNomePaciente] = useState("");
    const [dNascPaciente, setdNascPaciente] = useState("");
    const [cpfPaciente, setCpfPaciente] = useState("");
    const [sexoPaciente, setSexoPaciente] = useState("");
    const [telPaciente, setTelPaciente] = useState("");
    const [logradouroPaciente, setLogradouroPaciente] = useState("");
    const [numeroPaciente, setNumeroPaciente] = useState("");
    const [cidadePaciente, setCidadePaciente] = useState("");
    const [estadoPaciente, setEstadoPaciente] = useState("");
    const [cepPaciente, setCepPaciente] = useState("");
    const [pacienteList, setPacienteList] = useState([]);

    const salvar = () => {

        let pacientesArmazenados = JSON.parse(localStorage.getItem('pacientes')) || [];

        const res = {
            id: idPaciente,
            dadosPaciente: {
                nome: nomePaciente,
                dataNasc: dNascPaciente.split('-').reverse().join('/'),
                cpf: cpfPaciente,
                sexo: sexoPaciente,
                tel: telPaciente
            },
            endereco: {
                logradouro: logradouroPaciente,
                numero: numeroPaciente,
                cidade: cidadePaciente,
                estado: estadoPaciente,
                cep: cepPaciente
            },
            prontuario: {
                data: "",
                hora: "",
                dentista: "",
                tratamento: ""
            }
        };
        res.id = generateNextId(pacientesArmazenados);
        pacientesArmazenados.push(res);

        localStorage.setItem("pacientes", JSON.stringify(pacientesArmazenados));
        setPacienteList(pacientesArmazenados);
        limpaFormulario();
    }

    const limpaFormulario = () => {
        setIdPaciente("");
        setNomePaciente("");
        setdNascPaciente("");
        setCpfPaciente("");

        setTelPaciente("");
        setLogradouroPaciente("")
        setNumeroPaciente("");
        setCidadePaciente("");

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

    const buscar = (e) => {
        setPacienteList(JSON.parse(localStorage.getItem('pacientes')) || [])
        let res = []
        if (e === "") {
            return setPacienteList(JSON.parse(localStorage.getItem('pacientes')) || [])
        }

        pacienteList.map((paciente) => {
            if (`${paciente.dadosPaciente.nome}`.toLowerCase().includes(`${e}`.toLowerCase())) {
                res.push(paciente)
            }
        }
        )
        res.length !== 0 ? setPacienteList(res) : setPacienteList(JSON.parse(localStorage.getItem('pacientes')) || [])
    }

    useEffect(
        () => setPacienteList(JSON.parse(localStorage.getItem('pacientes')) || []), []
    );

    return (
        <>
            {(sessionStorage.getItem("email") === "adriano@email.com" && sessionStorage.getItem("senha") === "123456") || (sessionStorage.getItem("email") === "professor@email.com" && sessionStorage.getItem("senha") === "123456") ?
                <div className="container-fluid container-home p-0 m-0">
                    <div className="container-fluid row p-0 m-0 container-home">
                        <Menu />

                        <div className="col p-3 bg-light">
                            <Header />

                            <div className="row">
                                <div className="col flex-col text-end mb-3">
                                    <h5 className="me-3 fst-italic text-secondary" >Orçamentos</h5>
                                    <hr />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col m-2 shadow-lg p-3">
                                    <div className="row ">
                                        <div className="col d-flex align-items-center">
                                            <div className="input-group flex-nowrap">
                                                <span className="input-group-text" id="addon-wrapping"><i className="bi bi-search"></i></span>
                                                <input type="text" className="form-control fst-italic" onChange={(e) => buscar(e.target.value)} placeholder="Pesquisar orçamento" aria-label="pesquisar" aria-describedby="addon-wrapping" />
                                            </div>
                                            <button type="button" className="btn btn-success ms-3 text-nowrap" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Cadastrar Orçamento
                                            </button>

                                        </div>
                                    </div>

                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Cadastro de Orçamentos</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="form">

                                                        <div className="mb-3 d-flex align-items-baseline">
                                                            <label htmlFor="name-form" className="form-label me-2">Nome:</label>
                                                            <input type="text" className="form-control" id="name-form" onChange={e => setNomePaciente(e.target.value)} value={nomePaciente} aria-describedby="name-form" />
                                                        </div>

                                                        {/* ENDEREÇO */}
                                                        <div className="mb-3 mt-3 d-flex align-items-baseline">
                                                            <label htmlFor="cep-form" className="form-label me-2">Valor:</label>
                                                            <input type="text" onChange={e => setCepPaciente(e.target.value)} value={cepPaciente} className="form-control w-25" maxLength={8} id="cep-form" aria-describedby="cep-form" />
                                                        </div>
                                                        <div className="mb-3 mt-3 d-flex align-items-baseline">
                                                            <label htmlFor="logradouro-form" className="form-label me-2">Procedimento:</label>
                                                            <input type="text" onChange={e => setLogradouroPaciente(e.target.value)} value={logradouroPaciente} className="form-control" id="logradouro-form" aria-describedby="logradouro-form" />
                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                                    <button type="submit" onClick={(e) => salvar(e)} className="btn btn-primary" data-bs-dismiss="modal">Salvar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row mt-3">
                                <div className="col">
                                    <table className="table shadow">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Paciente</th>
                                                <th scope="col-1">Valor</th>
                                                <th scope="col">Procedimento</th>
                                                <th scope="col">Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                pacienteList?.map(({ id, dadosPaciente: { nome, dataNasc, tel, cpf }, financeiro:{valor, tratamento} }, index) => {
                                                    return (<tr key={index}>
                                                        <th scope="row">{id}</th>
                                                        <td>{nome}</td>
                                                        <td>{valor}</td>
                                                        <td>{tratamento}</td>
                                                        <td>

                                                            <button className="btn btn-outline-primary btn-sm me-1 p-1" data-bs-toggle="modal" data-bs-target="#exampleModal" id={id}>Editar</button>
                                                            <button className="btn btn-outline-danger btn-sm me-1 p-1">Excluir</button>
                                                        </td>
                                                    </tr>)
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

                    export default Relatorios;