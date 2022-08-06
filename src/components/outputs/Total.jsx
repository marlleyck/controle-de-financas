import React, {useContext, useEffect} from 'react';
import { AuthContext } from '../../contexts/auth';

import {MdOutlineAttachMoney} from 'react-icons/md'

import './Total.sass'

const Total = () => {

    const {total, setTotal, setEntrada, setSaida, financ} 
    = useContext(AuthContext)

    useEffect(() => {
        const amountOut = financ.filter((item) => item.status === 'saida')
                            .map((transaction) => Number(transaction.mony))

        const amountIn = financ.filter((item) => item.status === 'entrada')
                            .map((transaction) => Number(transaction.mony))

        const saida = amountOut.reduce((acc, cur) => acc + cur,0).toFixed(2);
        const entrada = amountIn.reduce((acc, cur) => acc + cur,0).toFixed(2);

        const tot = entrada != 0 ? (Number(entrada) - Number(saida)).toFixed(2) : Number(entrada)
        
        setEntrada(entrada)
        setSaida(saida)
        setTotal(tot)

    }, [financ])

    return ( 
        <div className='container-tot'>
        <div className='cont-tot'>
            <p>Total</p>
            <MdOutlineAttachMoney size={25} color={'#000'} />
        </div>
        <h2>R$ {total}</h2>
    </div>
     );
}
 
export default Total;