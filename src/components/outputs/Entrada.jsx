import React, {useContext} from 'react';
import { AuthContext } from '../../contexts/auth';

import {BsArrowUpCircle} from 'react-icons/bs'

import './Entrada.sass'

const Entrada = () => {

    const {entrada} = useContext(AuthContext)

    return ( 
        <div className='container-entr'>
            <div className='cont-entr'>
                <p>Entradas</p>
                <BsArrowUpCircle size={25} color={'#000'} />
            </div>
            <h2>R$ {entrada}</h2>
        </div>
     );
}
 
export default Entrada;