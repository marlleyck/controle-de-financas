import React, {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext({})

function AuthProvider({children}) {

    const getLocal = () => JSON.parse(localStorage.getItem('db_outputs')) ?? []
    const setLocal = (db_outputs) => localStorage.setItem('db_outputs', JSON.stringify(db_outputs))


    const [descrip, setDescrip] = useState('')

    const [inpValor, setInpValor] = useState(0.00)

    const [selecao, setSelecao] = useState('')

    const db = getLocal()

    const [total, setTotal] = useState(0)

    const [entrada, setEntrada] = useState(0)

    const [saida, setSaida] = useState(0)


    const [inpDescrip, setInpDescrip] = useState('')
    const [inputValor, setInputValor] = useState('')

    const [financ, setFinanc] = useState(getLocal)


    return (
        <AuthContext.Provider value={
                                    {descrip, setDescrip, inpValor, setInpValor, 
                                    selecao, setSelecao, total, setTotal, 
                                    entrada, setEntrada, saida, setSaida, financ, setFinanc,
                                    inpDescrip, setInpDescrip, inputValor, setInputValor,
                                    getLocal, setLocal}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;