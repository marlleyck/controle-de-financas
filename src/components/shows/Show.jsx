import React, {useContext} from 'react';
import { AuthContext } from '../../contexts/auth';

import {FaTrash} from 'react-icons/fa'
import {BsArrowUpCircle} from 'react-icons/bs'

import './Show.sass'

const Show = () => {

    const {financ, setFinanc} = useContext(AuthContext)

    const handleClickTrash = (id) => {
        const newFinanc = financ.filter((item) => item.id !== id)
        setFinanc(newFinanc)
    }

    return ( 
        <div className='cont-show'>
            <header>
                <p>Descrição</p>
                <p>Valor</p>
                <p>Ação</p>
            </header>

            <div className="body">
                {financ.map((item) => (
                    <div className="cont-body" key={item.id}>
                    {item.status === 'entrada' && (
                        <div className="desc-div">
                            <p className='desc-value' style={{color: 'green'}}>
                                {item.descricao}
                            </p>
                        </div>
                    )}
                    {item.status === 'saida' && (
                        <div className="desc-div">
                            <p className='desc-value' style={{color: 'red'}}>
                                {item.descricao}
                            </p>
                        </div>
                    )}
                        <div className="value-div">
                            <p className='valor-value'>{item.mony}</p>
                        </div>
                        <div className="icon-div">
                            <FaTrash className='icon-div-lixeira'
                            onClick={() => handleClickTrash(item.id)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Show;