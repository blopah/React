import React from 'react'

const myVar = (props) => {

    function plane(plan) {
        return props.mundo('planeta')
    }

    const planet = plane();

    return <div>
        <p>{props.children} {planet}</p>
    </div>
}

export default myVar;