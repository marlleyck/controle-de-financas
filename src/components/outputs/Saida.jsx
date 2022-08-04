import React, {useContext} from 'react';
import { AuthContext } from '../../contexts/auth';
import {BsArrowDownCircle} from 'react-icons/bs'

import './Saida.sass'

const Saida = () => {

    const {saida} = useContext(AuthContext)

    return ( 
        <div className='container-said'>
            <div className='cont-said'>
                <p>Saidas</p>
                <BsArrowDownCircle size={25} color={'#000'} />
            </div>
            <h2>R$ {saida}</h2>
        </div>
     );
}
 
export default Saida;