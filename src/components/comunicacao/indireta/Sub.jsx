import React from 'react'

const myVar = (props) => {

    function clique() {
        props.onClicar(
            Math.random()
        )
    };

    return (
        <div>
            <button onClick={clique}>
                Alterar
            </button>
        </div>
    );
};

export default myVar;