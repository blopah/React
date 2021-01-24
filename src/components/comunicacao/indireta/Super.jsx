import React, {useState} from 'react'
import Sub from './Sub'

const MyNewVar = (props) => {

    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado, texto) {
        setNum(valorGerado)
    }
    
    return <div>
        <h4>Valor: {num}</h4>
        <Sub onClicar={quandoClicar}></Sub>
    </div>
}

export default MyNewVar;