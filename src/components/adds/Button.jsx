import React, {useContext, useEffect} from 'react';
import { AuthContext } from '../../contexts/auth';

import './Button.sass'

const Button = ({setLocal}) => {

    const {descrip, inpValor, selecao, total, setTotal, setEntrada, setSaida, financ, setFinanc, setInpDescrip, setInputValor}
    = useContext(AuthContext)

    const handleClick = () => {
        if (selecao === 'entrada') {
            let soma = Number(total) + Number(inpValor)
            setTotal(soma)
            setEntrada(inpValor)

            setFinanc([...financ, 
                {
                    id: financ.length+1,
                    descricao: descrip, 
                    mony: inpValor,
                    status: 'entrada'
                }
            ])
        } else if (selecao === 'saida') {
            let dif = Number(total) - Number(inpValor)
            setTotal(dif)
            setSaida(inpValor)

            setFinanc([...financ, 
                {
                    id: financ.length+1,
                    descricao: descrip, 
                    mony: inpValor,
                    status: 'saida'
                }
            ])
        } else {
            alert('Preencha todas as informações!')
        } 
        setInpDescrip('')
        setInputValor('')
    }
    
    useEffect(() => {
        setLocal(financ)


    }, [financ])

    return ( 
        <div className="button-cont">
            <button className='botao' onClick={handleClick}>Adicionar</button>
        </div>
     );
}
 
export default Button;