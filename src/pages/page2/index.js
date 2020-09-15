
import React from 'react'
import { Link } from 'react-router-dom';


export default  function Page2(){
    return(
        <div>
            <h1>Texto Supimpa2</h1>
            <Link to='/' >Home</Link>
            <br />
            <Link to='/pagina1' >Pagina1</Link>
        </div>
    );
}