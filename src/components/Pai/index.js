

import React, { useState } from 'react'
import Filho from  '../Filho'

export default function Pai(){
    const [nome, setNome] = useState("Pedro")
    const [idade, setIdade] = useState(19)
    const [Campeoes, setCampeoes] = useState(["Camile",'Renek','Sett'])
    return(
        <div>
            <h2>Filhos:</h2>
            <Filho nome = {nome} idade = {idade} Campeoes = {Campeoes}/>
        </div>
    )
}