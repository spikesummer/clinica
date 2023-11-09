import React from "react";

const Home = props =>{
    return(
        <>
            {(sessionStorage.getItem("email") === "adriano@email.com" && sessionStorage.getItem("senha") === "123456") || (sessionStorage.getItem("email") === "professor@email.com" && sessionStorage.getItem("senha") === "123456")  ? 
                <>
                    <h1>Seja bem vindo</h1>
                    
                </>
            : window.location.href = "/"}
        </>
    )
}

export default Home;