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
                        

                            <div className="col bg-light p-3 shadow">
                                <div className="col d-flex align-items-center">
                                <div className="input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping"><i className="bi bi-search"></i></span>
                                    <input type="text" className="form-control fst-italic" placeholder="pesquisar contas" aria-label="pesquisar" aria-describedby="addon-wrapping"/>
                                </div>                                            
                                    <button type="button" className="btn btn-success ms-3 text-nowrap" data-bs-toggle="modal" data-bs-target="">
                                    Adicionar pagamento
                                    </button>

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
                                                                        <button className="btn btn-outline-primary btn-sm me-1 p-1" data-bs-toggle="modal" data-bs-target="#exampleModal" id={id}>Editar</button>
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