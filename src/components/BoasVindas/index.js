import React from 'react'
import Mensagem from '../Mensagem'
import './boasvindas.css' 

 function BoasVindas() {

    return (
        <div className='bvindas'>
            <h1> Seja Bem Vindo. </h1>
            <h2> Esse é o meu site feito usando React JS </h2>
            <Mensagem />
        </div>
    );
}

export default BoasVindas;