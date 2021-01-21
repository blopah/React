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
import Comunicacaodireta from './comunicacao/direta/Pai'
import Comunicacaoindireta from './comunicacao/indireta/Super'
import Comunicacaoindireta2 from './comunicacao/indireta2/Pais'

const myVar = (props) => {
    return <div className="App">
        <Card titulo="#09 - Comunicação indireta 2" color="#ff8484">
            <Comunicacaoindireta2></Comunicacaoindireta2>
        </Card>
        <Card titulo="#08 - Comunicação indireta" color="#848484">
            <Comunicacaoindireta></Comunicacaoindireta>
        </Card>
        <Card titulo="#07 - Comunicação direta" color="#f00000">
            <Comunicacaodireta sobrenome="Freitas"></Comunicacaodireta>
        </Card>
        <Card titulo="#06 - Condicional Com If" color="#00f000">
            <CondicionalComIf numero={8}></CondicionalComIf>
        </Card>
        <Card titulo="#05 - Condicional" color="#00fff0">
            <Condicional numero={9}></Condicional>
        </Card>
        <Card titulo="#04 - Repetição" color="#000f00">
            <Repeticao>
                <ul>
                    <li>Python</li>
                    <li>Java Script</li>
                    <li>Java</li>
                    <li>PHP</li>
                </ul>
            </Repeticao>
        </Card>
        <Card titulo="#03 - Com Filhos" color="#0000f0">
            <ComFilhos>
                <ul>
                    <li>Python</li>
                    <li>Java Script</li>
                    <li>Java</li>
                    <li>PHP</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Com Parametros" color="#f000f0">
            <ComParametro pai="Pablo" mae="Vitória" filho="Joaquim"></ComParametro>
        </Card>
        <Card titulo="#01 - Primeiro">
            <Primeiro titulo="Primeiro"></Primeiro>
        </Card>
    </div>
};

export default myVar;