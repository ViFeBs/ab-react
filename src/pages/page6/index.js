


import React, { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

import {ScaleLoader} from 'react-spinners'

export default function Page6(){
    const ref = useRef(null)
    const [consultando, setConsultando] = useState(false)
    const salvarClick = () =>{
        toast.success('🚀Salvo com Sucesso')
    }
    const constClick = () => {
        setConsultando(true)
        ref.current.continuousStart()
    }

    return(
        <div>
            <LoadingBar color={'#3283a8'} height={10} ref={ref} />
            <h1> Alerta && Loading</h1>

            <div>
                <button onClick={salvarClick}>
                    Salvar
                </button>
            </div>        
            <div>
                <button onClick={constClick}>
                    Consultar
                </button>
            </div>
            <ScaleLoader 
            color={'#32ba56'}
            loading={consultando}/>
            <ToastContainer />
        </div>
    )
}