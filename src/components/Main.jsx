import React from 'react';

import Entrada from './outputs/Entrada';
import Saida from './outputs/Saida';
import Total from './outputs/Total';
import Descricao from './adds/Descricao';
import Valor from './adds/Valor';
import Show from './shows/Show';

import './Main.sass'

const Main = () => {
    return ( 
        <main className='main'>

            <div className='outputs'>
                <Entrada />

                <Saida />

                <Total />
            </div>

            <div className="adds">
                <Descricao />

                <Valor />

                
            </div>

            <div className='shows'>
                <Show />
            </div>
        </main>
     );
}
 
export default Main;