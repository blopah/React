import React from 'react'

export default (props) => {
    return (
        <div>
            <button onClick={props.incr}>+</button>
            <button onClick={props.decr}>-</button>
        </div>
    )
}
