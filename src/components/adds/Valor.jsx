import React from 'react';

import './Valor.sass'

const Valor = () => {
    return ( 
        <div className='cont-val'>
            <label htmlFor="val">Valor</label>
            <input type="number" />
        </div>
     );
}
 
export default Valor;