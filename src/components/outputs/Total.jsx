import React, {useContext} from 'react';
import { AuthContext } from '../../contexts/auth';

import {MdOutlineAttachMoney} from 'react-icons/md'

import './Total.sass'

const Total = () => {

    const {inpValor, setInpValor, total} = useContext(AuthContext)


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