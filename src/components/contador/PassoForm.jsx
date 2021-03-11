import React from 'react';

const myVar = (props) => {
    return (
        <div>
            <label htmlFor="passiInput">Depósito: </label>
            <input type="number" className="input" value={props.passo}
                onChange={e => props.onPassoChange(+e.target.value )} />
        </div>
    )
}

export default myVar;