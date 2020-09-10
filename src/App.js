import React from 'react';
import Header from './components/Header'
//import Footer from './components/Footer'
import {LoginComponent}  from './components/Login'
import {RegisterComponent} from './components/Register'
const App = ()=>{
    const companyName='Pega Systems';
    return <div>
        <Header title={companyName} />
        
        <RegisterComponent />
       
        </div>;

};

export default App;

//This is called pure component or stateless component