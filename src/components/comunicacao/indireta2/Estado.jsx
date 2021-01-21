import React from 'react'

const myVar = (props) => {
    return <div>
        <p>{props.children} {props.mundo}</p>
    </div>
}

export default myVar;