import React from 'react'
import Sub from './Sub'

const myVar = (props) => {

    function quandoClicar(valorGerado, texto) {
        console.log('Ação!')
        console.log(valorGerado)
        console.log(texto)
    }
    
    return <div>
        <h4>Valor</h4>
        <Sub onClicar={quandoClicar}></Sub>
    </div>
}

export default myVar;