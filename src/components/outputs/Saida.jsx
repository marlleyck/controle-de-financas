import React from 'react';
import {BsArrowDownCircle} from 'react-icons/bs'

import './Saida.sass'

const Saida = () => {
    return ( 
        <div className='container-said'>
            <div className='cont-said'>
                <p>Saidas</p>
                <BsArrowDownCircle size={25} color={'#000'} />
            </div>
            <h2>R$ 0.00</h2>
        </div>
     );
}
 
export default Saida;