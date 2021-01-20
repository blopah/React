import React from 'react'

const myVar = (props) => {
    return (
        <div>
            <button onClick={() => {
                props.onClicar(Math.random(), 'Fim')
            }}>Alterar</button>
        </div>
    );
};

export default myVar;