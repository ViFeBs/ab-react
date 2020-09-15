
import React from 'react';
import { Link } from 'react-router-dom';

export default  function Home(){
    return(
        <div>
            <h1> Casa </h1>
            <Link to='/pagina1' >Navegação:Pagina1</Link>
            <br />
            <Link to='/pagina2' >Navegação:Pagina2</Link>
            <br />
            <Link to='/pagina3' >Renderização</Link>
            <br />
            <Link to='/pagina4' >Eventos </Link>
            <br />
            <Link to='/pagina5' >Comunicação de Componentes</Link>
            <br />
            <Link to='/pagina6' >Alert & Loading</Link>
        </div>
    );
}
