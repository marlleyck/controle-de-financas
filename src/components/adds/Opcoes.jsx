import React, {useContext} from 'react';
import { AuthContext } from '../../contexts/auth';

import './Opcoes.sass'

const Opcoes = () => {

    const {selecao, setSelecao} = useContext(AuthContext)

    const handleEntrada = () => {
        setSelecao('entrada')
    }

    const handleSaida = () => {
        setSelecao('saida')
    }

    return ( 
        <div className='opcoes-cont'>
            <div className="entrada-cont-rad">
                <label htmlFor="entrada-rad" className='entrada-cont-rad-lab'>Entrada</label>
                <input type="radio" id='entrada-rad' name='select'
                onClick={handleEntrada} />
            </div>

            <div className="saida-cont-rad">
                <label htmlFor="saida-rad" className='saida-cont-rad-lab'>Saída</label>
                <input type="radio" id='saida-rad' name='select'
                onClick={handleSaida} />
            </div>
        </div>
     );
}
 
export default Opcoes;