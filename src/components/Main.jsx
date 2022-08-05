import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

import Entrada from './outputs/Entrada';
import Saida from './outputs/Saida';
import Total from './outputs/Total';
import Descricao from './adds/Descricao';
import Valor from './adds/Valor';
import Show from './shows/Show';
import Opcoes from './adds/Opcoes';
import Button from './adds/Button';

import './Main.sass'

const Main = () => {

    const {getLocal, setLocal} = useContext(AuthContext)


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

                <Opcoes />

                <Button
                getLocal={getLocal}
                setLocal={setLocal} />
            </div>

            <div className='shows'>
                <Show 
                getLocal={getLocal}
                setLocal={setLocal} />
            </div>
        </main>
     );
}
 
export default Main;