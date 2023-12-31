import React from "react";
import Header from "../header/Header";
import Menu from "../menu/Menu";



export const Contas_a_pagar = props =>{

    const contas = [
        {
            id: 1,
            nomeFatura: "Conta de luz",
            valor: 75.00,
            vencimento: "11-05-2023",
            pagamento: "",
            status: "aberto"
        },
        {
            id: 1,
            nomeFatura: "Conta de luz",
            valor: 65.00,
            vencimento: "11-05-2023",
            pagamento: "",
            status: "aberto"
        },
        {
            id: 1,
            nomeFatura: "Conta de luz",
            valor: 175.00,
            vencimento: "11-05-2023",
            pagamento: "",
            status: "aberto"
        },
        {
            id: 1,
            nomeFatura: "Conta de luz",
            valor: 345.00,
            vencimento: "11-05-2023",
            pagamento: "",
            status: "aberto"
        },
        {
            id: 1,
            nomeFatura: "Conta de luz",
            valor: 145.00,
            vencimento: "11-05-2023",
            pagamento: "",
            status: "aberto"
        },
        {
            id: 1,
            nomeFatura: "Conta de luz",
            valor: 655.00,
            vencimento: "11-05-2023",
            pagamento: "",
            status: "aberto"
        },
        {
            id: 1,
            nomeFatura: "Conta de luz",
            valor: 75.00,
            vencimento: "11-05-2023",
            pagamento: "",
            status: "aberto"
        },
        {
            id: 1,
            nomeFatura: "Conta de luz",
            valor: 75.00,
            vencimento: "11-05-2023",
            pagamento: "",
            status: "aberto"
        },
        {
            id: 1,
            nomeFatura: "Conta de luz",
            valor: 75.00,
            vencimento: "11-05-2023",
            pagamento: "",
            status: "aberto"
        },
        {
            id: 1,
            nomeFatura: "Conta de luz",
            valor: 75.00,
            vencimento: "11-05-2023",
            pagamento: "",
            status: "aberto"
        }
    ]
    return(
        <>
        {(sessionStorage.getItem("email") === "adriano@email.com" && sessionStorage.getItem("senha") === "123456") || (sessionStorage.getItem("email") === "professor@email.com" && sessionStorage.getItem("senha") === "123456")  ? 
                <div className="container-fluid container-home p-0 m-0">
                    <div className="container-fluid row p-0 m-0 container-home">
                        <Menu/>
                            
                        <div className="col p-3 bg-light">                            
                            <Header/>
                        
                            <div className="row">
                                <div className="col flex-col text-end mb-3">
                                    <h5 className="me-3 fst-italic text-secondary" >Contas a pagar</h5>
                                    <hr />
                                </div>
                            </div>

                            <div className="col bg-light p-3 shadow">
                                <div className="col d-flex align-items-center">
                                <div className="input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping"><i className="bi bi-search"></i></span>
                                    <input type="text" className="form-control fst-italic" placeholder="pesquisar contas" aria-label="pesquisar" aria-describedby="addon-wrapping"/>
                                </div>                                            
                                    <button type="button" className="btn btn-success ms-3 text-nowrap" data-bs-toggle="modal" data-bs-target="#contasApagar">
                                    Adicionar pagamento
                                    </button>

                                </div>
                            </div>


                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="contasApagar" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Cadastro de Contas</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="form">
                                                
                                                <div className="mb-3 d-flex align-items-baseline">
                                                    <label htmlFor="name-form" className="form-label me-2">Nome:</label>
                                                    <input type="text" className="form-control" id="name-form" required   aria-describedby="name-form"/>                                                    
                                                </div>
                                                <div className="mb-3 d-flex align-items-baseline">
                                                    <label htmlFor="nasc-form" className="form-label me-2 text-nowrap">Data de vencimento:</label>
                                                    <input type="date" className="form-control w-50" id="nasc-form" aria-describedby="nasc-form"/>                                                    
                                                </div>                                 


                                                {/* ENDEREÇO */}
                                                <div className="mb-3 mt-3 d-flex align-items-baseline">
                                                    <label htmlFor="cep-form" className="form-label me-2">Valor</label>
                                                    <input type="text" className="form-control w-25" maxLength={8} id="cep-form" aria-describedby="cep-form"/>                                                    
                                                </div>
                                                <div className="mb-3 mt-3 d-flex align-items-baseline">
                                                    <label htmlFor="logradouro-form" className="form-label me-2">Tipo de pagamento:</label>
                                                    <input type="text"  className="form-control" id="logradouro-form" aria-describedby="logradouro-form"/>                                                    
                                                </div>
                                                <div className="col d-flex">
                                                    <div className="mb-3 d-flex align-items-baseline ">
                                                        <label htmlFor="numero-form" className="form-label me-2">Status:</label>
                                                        <input type="text" className="form-control me-1" id="numero-form" aria-describedby="numero-form"/>       
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                            <button type="submit"  className="btn btn-primary" data-bs-dismiss="modal">Salvar</button>
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
                                                    <th scope="col">Nome da Fatura</th>
                                                    <th scope="col">Valor</th>
                                                    <th scope="col">Vencimento</th>
                                                    <th scope="col">Pagamento</th>
                                                    <th scope="col">status</th>
                                                    <th scope="col">Ações</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    contas?.map(({id, nomeFatura, valor, vencimento, pagamento, status}, index)=>{
                                                        return  <tr key={index}>
                                                                    <th scope="row">{id + index}</th>
                                                                    <td>{nomeFatura}</td>
                                                                    <td>{valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                                                    <td>{vencimento}</td>
                                                                    <td>{pagamento}</td>
                                                                    <td>{status}</td>
                                                                    <td>
                                                                        <button className="btn btn-outline-success btn-sm me-1 p-1"id={id} onClick={(e)=>e.target.id}>Pagar</button>
                                                                        <button className="btn btn-outline-primary btn-sm me-1 p-1" data-bs-toggle="modal" data-bs-target="#contasApagar" id={id}>Editar</button>
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