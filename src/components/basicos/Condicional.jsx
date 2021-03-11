import React from "react";

const myVar = props => {
    return <div>
        <h2>O número {props.numero} é</h2>
        {props.numero % 2 === 0 ?
        <h3>Par</h3>
        : <h3>Ímpar</h3>
        }
    </div>
}

export default myVar;