import React from 'react';

import {MdOutlineAttachMoney} from 'react-icons/md'

import './Total.sass'

const Total = () => {
    return ( 
        <div className='container-tot'>
        <div className='cont-tot'>
            <p>Total</p>
            <MdOutlineAttachMoney size={25} color={'#000'} />
        </div>
        <h2>R$ 0.00</h2>
    </div>
     );
}
 
export default Total;