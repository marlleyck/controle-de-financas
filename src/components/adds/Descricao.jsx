import React, { useState } from 'react';

import './Descricao.sass'

const Descricao = () => {

    const [descrip, setDescrip] = useState('')

    const handleDescrip = (e) => {
        setDescrip(e.target.value)
        console.log(descrip)
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