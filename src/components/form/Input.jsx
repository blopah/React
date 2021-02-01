import React, { useState } from 'react'

const MyVar = (props) => {
    const [name, setName] = useState('Pedro')
    return (
        <>
            <h3>{name}</h3>
            <input type="text" value={name} 
            onChange={e => setName(e.target.value)}
            />
        </>
    );
}

export default MyVar;