import React from 'react';

import './Opcoes.sass'

const Opcoes = () => {
    return ( 
        <div className='opcoes-cont'>
            <div className="entrada-cont-rad">
                <label htmlFor="entrada-rad" className='entrada-cont-rad-lab'>Entrada</label>
                <input type="radio" id='entrada-rad' name='select' checked  />
            </div>

            <div className="saida-cont-rad">
                <label htmlFor="saida-rad" className='saida-cont-rad-lab'>Saída</label>
                <input type="radio" id='saida-rad' name='select' />
            </div>
        </div>
     );
}
 
export default Opcoes;