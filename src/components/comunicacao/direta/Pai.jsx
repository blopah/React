import React from 'react'
import Filho from './Filho'

const YourVar = (props) => {
    return <div>
        <Filho {...props}>Lucas</Filho>
        <br/>
        <Filho sobrenome={props.sobrenome}>Maria</Filho>
        <br/>
        <Filho sobrenome="Silva">Thaylane</Filho>
    </div>
}

export default YourVar;