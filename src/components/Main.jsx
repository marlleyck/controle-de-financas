import React from 'react';

import Entrada from './outputs/Entrada';
import Saida from './outputs/Saida';
import Total from './outputs/Total';

import './Main.sass'

const Main = () => {
    return ( 
        <main className='main'>

            <div className='outputs'>
                <Entrada />

                <Saida />

                <Total />
            </div>


        </main>
     );
}
 
export default Main;