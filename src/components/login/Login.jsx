import React, { useState } from "react";

const data = [
    {"email": "adriano@email.com",
     "senha": "123456"   
    },
    {"email": "professor@email.com",
     "senha": "123456"   
    }
]


const Login = props =>{

    const [emailInput, setEmail] = useState('');
    const [senhaInput, setSenha] = useState('');
    const [errorLogin, setErrorLogin] = useState('');

    const handlerLogin = async (e)=>{
        e.preventDefault();
        
        let resp = false;
        data.map((dado, key)=>{
            if(dado.email === e.target[0].value && dado.senha === e.target[1].value){
                resp = true;
            }
            return(
                resp
            )})
        
        if(resp){
            sessionStorage.setItem("email", e.target[0].value);
            sessionStorage.setItem("senha", e.target[1].value);
            window.location.href = "/home";
        }else{
            setErrorLogin('Usuário ou senha inválidos!');
        }
    }

    return(
        <div className="login">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-5 col-lg-4 col-xl-3">
                        <div className="card shadow">
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4">LOGIN</h2>
                                <form onSubmit={e=>handlerLogin(e)}>
                                    <div className="mb-3">
                                        <label for="username" className="form-label">Usuário</label>
                                        <input type="text" className="form-control" required id="username" onChange={(e) => setEmail(e.target.value)} value={emailInput} placeholder="Digite seu usuário"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Senha</label>
                                        <input type="password" className="form-control" required onChange={e => setSenha(e.target.value)} value={senhaInput} id="password" placeholder="Digite sua senha"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100" >Entrar</button>
                                </form>
                                {errorLogin ? <p class="alert alert-warning mt-3" role="alert">{errorLogin}</p> : ''}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;