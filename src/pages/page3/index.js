
import React,{ useState } from 'react'


export default  function Page3(){
    const [mensagem, setMensagem] = useState('onde está meu tesouro')
    const [nome, setNome] = useState('Pirata')
    const [piratas, setPiratas] = useState(['Luffy','Zoro','Sanji','Usopp','Jhinbe'])
    return(
        
        <div>
            <h1>Carambolas</h1>
            <h1>{mensagem}</h1>
            {nome === 'Pirata' && (<h2>Vá Atrás dos Chapeus de palha</h2>)} 
            {nome !== 'Pirata' && (<h2>Vá Atrás dos Piratas</h2>)}
            <ul>
                {piratas.map(item => 
                    <li key={item}>{item}</li>)}    
            </ul>         
        </div>
    );
}