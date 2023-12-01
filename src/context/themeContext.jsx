import { createContext, useState } from "react";


// CRIAÇÃO DO CONTEXTO E PROVIDER
export const dateContext =createContext();
const dateNow = new Date().getDate();

export const DateProvider = ({children})=>{
    const [date, setDate] = useState(dateNow);
    const toggleDate = (e)=>{
        setDate(e);
    }

    return(
        <dateContext.Provider value={{date, toggleDate}}>
            {children}
        </dateContext.Provider>
    ) 
        
}

// FORMA DE USAR O CONTEXTO

// import {useContext} from "react";
// import { ThemeContext } from "../context/ThemeContext";

//const {theme, toggleTheme} = useContext(ThemeContext); 

// O tema atual é {theme}


