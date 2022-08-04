import React, {createContext, useState} from 'react';

export const AuthContext = createContext({})

function AuthProvider({children}) {

    const [descrip, setDescrip] = useState('')

    const [inpValor, setInpValor] = useState(0.00)

    const [selecao, setSelecao] = useState('')


    const [total, setTotal] = useState(0)

    const [entrada, setEntrada] = useState(0)

    const [saida, setSaida] = useState(0)


    const [financ, setFinanc] = useState([])

    return (
        <AuthContext.Provider value={
                                    {descrip, setDescrip, inpValor, setInpValor, 
                                    selecao, setSelecao, total, setTotal, 
                                    entrada, setEntrada, saida, setSaida, financ, setFinanc}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;