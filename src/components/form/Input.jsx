import React, { useState } from 'react'

const MyVar = (props) => {
    const [name, setName] = useState('')
    return (
        <div>
            <h3>{name}</h3>
            <br></br>
            <input placeholder="Insira seu nome"type="text" className="input dez" value={name} 
            onChange={e => setName(e.target.value)}
            />
        </div>
    );
}

export default MyVar;