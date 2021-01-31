import React from 'react'

const YourVar = (props) => {

    function clique() {
        props.onClicar(
            Math.random(), 'Gerado'
        );
    };

    return (
        <div>
            <div className="button" onClick={clique}>
                Alterar
            </div>
        </div>
    );
};

export default YourVar;