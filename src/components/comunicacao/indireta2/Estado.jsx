import React from 'react'

const myVar = (props) => {

    function plane() {
        return props.mundo('Planeta')
    }

    const planet = plane();

    return <div>
        <p>{props.children} {planet}</p>
    </div>
}

export default myVar;