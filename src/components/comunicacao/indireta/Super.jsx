import React, {useState} from 'react'
import Sub from './Sub'

const YourVar = (props) => {

    const [num, setNum] = useState(0)
    const [text, setText] = useState('Numero')

    function quandoClicar(valorGerado, texto) {
        setNum(valorGerado);
        setText(texto)
    }
    
    return <div>
        <h4>{text}: {num}</h4>
        <Sub onClicar={quandoClicar}></Sub>
    </div>
}

export default YourVar;