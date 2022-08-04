import React from 'react';

import {FaTrash} from 'react-icons/fa'
import {BsArrowUpCircle} from 'react-icons/bs'

import './Show.sass'

const Show = () => {
    return ( 
        <div className='cont-show'>
            <header>
                <p>Descrição</p>
                <p>Valor</p>
                <p>Ação</p>
            </header>

            <div className="body">
                <div className="desc-div">
                    <p className='desc-value'>Salário</p>
                </div>
                
                <div className="value-div">
                    <p className='valor-value'>1500</p>
                </div>
                <div className="icon-div">
                    <FaTrash className='icon-div-lixeira' />
                </div>
            </div>
        </div>
     );
}
 
export default Show;