import React, {useContext} from 'react';
import { AuthContext } from '../../contexts/auth';

import {FaTrash} from 'react-icons/fa'
import {BsArrowUpCircle} from 'react-icons/bs'

import './Show.sass'

const Show = () => {

    const {financ, setFinanc} = useContext(AuthContext)

    return ( 
        <div className='cont-show'>
            <header>
                <p>Descrição</p>
                <p>Valor</p>
                <p>Ação</p>
            </header>

            <div className="body">
                {financ.map((item) => (
                    <div className="cont-body">
                        <div className="desc-div">
                            <p className='desc-value'>{item.descricao}</p>
                        </div>
                
                        <div className="value-div">
                            <p className='valor-value'>{item.mony}</p>
                        </div>
                        <div className="icon-div">
                            <FaTrash className='icon-div-lixeira' />
                        </div>
                    </div>
                ))}
            </div>

        </div>
     );
}
 
export default Show;