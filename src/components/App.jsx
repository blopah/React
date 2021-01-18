// css
import '../index.css'

// react
import React from 'react'

// components
import Card from './layout/card'
import Primeiro from './basicos/Primeiro'
import ComParametro from './basicos/ComParametros'
import Repeticao from './basicos/Repeticao'
import ComFilhos from './basicos/ComFilhos'
import Condicional from './basicos/Condicional'
import CondicionalComIf from './basicos/CondicionalComIf'

const myVar = (props) => {
    return <div className="App">
        <Card titulo="#06 - Condicional Com If" color="#0505ff">
            <CondicionalComIf numero={8}></CondicionalComIf>
        </Card>
        <Card titulo="#05 - Condicional">
            <Condicional numero={9}></Condicional>
        </Card>
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