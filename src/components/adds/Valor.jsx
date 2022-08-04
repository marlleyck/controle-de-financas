import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import './Valor.sass'

const Valor = () => {

    const {inpValor, setInpValor} = useContext(AuthContext)

    const handleInpValor = (e) => {
        setInpValor(e.target.value)
    }

    return ( 
        <div className='cont-val'>
            <label htmlFor="val">Valor</label>
            <input type="number"
            onChange={handleInpValor}
            value={inpValor} />
        </div>
     );
}
 
export default Valor;