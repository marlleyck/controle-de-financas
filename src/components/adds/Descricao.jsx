import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import './Descricao.sass'

const Descricao = () => {

    const {descrip, setDescrip} = useContext(AuthContext)

    const handleDescrip = (e) => {
        setDescrip(e.target.value)
    }

    return ( 
        <div className='cont-desc'>
            <label htmlFor="desc">Descrição</label>
            <input type="text"
            onChange={handleDescrip}
            value={descrip} />
        </div>
     );
}
 
export default Descricao;