


import React from 'react'

export default function Filho(props){
    return(
        <div>
            <h3>{props.nome} - {props.idade}</h3>
            <ul>
                {props.Campeoes.map(item =>
                    <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}