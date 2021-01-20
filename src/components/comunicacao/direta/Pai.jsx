import React from 'react'
import Filho from './Filho'

const myVar = (props) => {
    return <div>
        <Filho sobrenome="Silva">Enzo</Filho>
        <Filho sobrenome="Silva">Valentina</Filho>
    </div>
}

export default myVar;