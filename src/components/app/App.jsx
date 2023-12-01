import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routes';
import { DateProvider } from '../../context/themeContext';

function App() {
   
    return (
        <div>
            <DateProvider>
                <BrowserRouter>
                <Routers/>
                </BrowserRouter>      
            </DateProvider>
        </div>
    );
}

export default App;