import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import './Valor.sass'

const Valor = () => {

    const {inpValor, setInpValor, inputValor, setInputValor} = useContext(AuthContext)

    const handleInpValor = (e) => {
        setInpValor(e.target.value)
        setInputValor(e.target.value)
    }

    return ( 
        <div className='cont-val'>
            <label htmlFor="val">Valor</label>
            <input type="number"
            onChange={handleInpValor}
            value={inputValor} />
        </div>
     );
}
 
export default Valor;