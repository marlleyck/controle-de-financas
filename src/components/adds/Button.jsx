import React, {useContext} from 'react';
import { AuthContext } from '../../contexts/auth';

import './Button.sass'

const Button = () => {

    const {descrip, inpValor, selecao, total, setTotal, setEntrada, setSaida}
    = useContext(AuthContext)

    const handleClick = () => {
        if (selecao === 'entrada') {
            let soma = Number(total) + Number(inpValor)
            setTotal(soma)
            setEntrada(inpValor)
        } else if (selecao === 'saida') {
            let dif = Number(total) - Number(inpValor)
            setTotal(dif)
            setSaida(inpValor)
        } 
    }

    return ( 
        <div className="button-cont">
            <button className='botao' onClick={handleClick}>Adicionar</button>
        </div>
     );
}
 
export default Button;