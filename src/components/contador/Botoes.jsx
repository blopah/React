import React from 'react'

const myVar = (props) => {
    return(
        <div>
            <button onClick={props.incr}>+</button>
            <button onClick={props.decr}>-</button>
        </div>
    )
}

export default myVar;