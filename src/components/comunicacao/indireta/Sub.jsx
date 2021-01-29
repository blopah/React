import React from 'react'

const myVar = (props) => {

    function clique() {
        props.onClicar(
            Math.random()
        )
    };

    return (
        <div>
            <div onClick={clique}>
                Alterar
            </div>
        </div>
    );
};

export default myVar;