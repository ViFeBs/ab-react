
import React from 'react';
import Not from './NotFound.png';
import './not-found.css';

export default  function NotFound(){
    return(
        <div className='box-not-found'>
            <img src={Not} alt='KKKKK' />
        </div>
    );
}