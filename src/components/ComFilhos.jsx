import React from 'react'

const myVar = (props) => {
    return <div className="ComFilhos">
        {props.children}
    </div>
};

export default myVar;