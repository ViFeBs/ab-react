
import React, { useState } from 'react'

export default function Page4(){
    const [mensagem, setMensagem] = useState('')
    const [texto, setTexto] = useState('')
    const [valor, setValor] = useState('')
    
    const ClickedoBotao =  () => {
        setMensagem(texto)
    }

    return(
        <div>
            <h1>Formularios</h1>
            <h3>{mensagem}</h3>

            <input type='text' onChange={(e) => setTexto(e.target.value)} />
            <div>
                <button onClick={ClickedoBotao}>
                    Clicka em Mim
                </button>
            </div>
            <br />
            <div>
                <input type='number' onChange={(e) => setValor(Number(e.target.value))} />
            </div>
            <div>
                <input type='date' onChange={(e) => setValor(Date(e.target.value))} />
            </div>
            <div>
                <input type='checkbox' onChange={(e) => Boolean(e.target.checked) ? setValor('Ligado') : setValor('Desligado')} />
            </div>
            <div>]
                <input type='Radio' name='sexo' onChange={(e) => Boolean(e.target.checked) ? setValor('Boy') : ""} /> Boy
                <input type='Radio' name='sexo' onChange={(e) => Boolean(e.target.checked) ? setValor('Girl') : ''} /> Girl
            </div>

            <h3>{valor}</h3>
        </div>
    )
}