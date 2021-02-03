import React from 'react';

const myVar = (props) => {
    return (
        <div>
            <label htmlFor="passiInput">Passo: </label>
            <input type="number" value={props.passo}
                onChange={e => props.onPassoChange(+e.target.value )} />
        </div>
    )
}

export default myVar;