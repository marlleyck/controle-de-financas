import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import './Descricao.sass'

const Descricao = () => {

    const {inpDescrip, setInpDescrip, setDescrip, inputValor, setInputValor} = useContext(AuthContext)

    const handleDescrip = (e) => {
        setDescrip(e.target.value)
        setInpDescrip(e.target.value)
    }

    return ( 
        <div className='cont-desc'>
            <label htmlFor="desc">Descrição</label>
            <input type="text"
            onChange={handleDescrip}
            value={inpDescrip} />
        </div>
     );
}
 
export default Descricao;