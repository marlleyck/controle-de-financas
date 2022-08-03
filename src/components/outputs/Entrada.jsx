import React from 'react';

import {BsArrowUpCircle} from 'react-icons/bs'

import './Entrada.sass'

const Entrada = () => {
    return ( 
        <div className='container-entr'>
            <div className='cont-entr'>
                <p>Entradas</p>
                <BsArrowUpCircle size={25} color={'#000'} />
            </div>
            <h2>R$ 0.00</h2>
        </div>
     );
}
 
export default Entrada;