import React from 'react'
import Filho from './Filho'

const myVar = (props) => {
    return <div>
        <Filho {...props}>Hermes</Filho>
        <Filho sobrenome={props.sobrenome}>Cristo</Filho>
        <Filho sobrenome="Silva">Zeus</Filho>
    </div>
}

export default myVar;