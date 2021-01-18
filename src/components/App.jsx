// css
import '../index.css'

// react
import React from 'react'

// components
import Card from './layout/card'
import Primeiro from './Primeiro'
import ComParametro from './ComParametros'
import Repeticao from './Repeticao'
import ComFilhos from './ComFilhos'

const myVar = (props) => {
    return <div className="App">
        <Card titulo="#04 - Repetição">
            <Repeticao>
                <ul>
                    <li>Python</li>
                    <li>Java Script</li>
                    <li>Java</li>
                    <li>PHP</li>
                </ul>
            </Repeticao>
        </Card>
        <Card titulo="#03 - Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Python</li>
                    <li>Java Script</li>
                    <li>Java</li>
                    <li>PHP</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Com Parametros">
            <ComParametro pai="Pablo" mae="Vitória" filho="Joaquim"></ComParametro>
        </Card>
        <Card titulo="#01 - Primeiro">
            <Primeiro titulo="Primeiro"></Primeiro>
        </Card>
    </div>
};

export default myVar;