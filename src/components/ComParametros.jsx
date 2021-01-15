import React from 'react'

const myVar = (props) => {
    return <div className="ComParametros">
        <h3>Pai: {props.pai}</h3>
        <h3>Mãe: {props.mae}</h3>
        <h3>Filho: {props.filho}</h3>
    </div>
};

export default myVar;