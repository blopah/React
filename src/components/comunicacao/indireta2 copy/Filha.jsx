import React from 'react'

const YourVar = (props) => {
    
    function plane() {
        return props.mundo('Planeta')
    }

    const planet = plane();

    return <div>
        <p>{props.children} {planet}</p>
    </div>
}

export default YourVar;