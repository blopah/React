import React from 'react'

const myVar = (props) => {
    return <div>
        <h3>{props.children} {props.sobrenome}</h3>
    </div>
}

export default myVar;