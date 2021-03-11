import React, { useState } from 'react'
import If from "./If";

const MyVar = props => {

    const [name, setName] = useState('')

    return <div>
        <h2>O número</h2>
        <input placeholder="Insira um número" type="number" className="input dez" value={name} 
            onChange={e => setName(e.target.value)}
            />
        <h2>é</h2>
        <If test={name % 2 === 0}>
            <h2>Par</h2>
        </If>
        <If test={name % 2 === 1}>
            <h2>Impar</h2>
        </If>
            
    </div>
}

export default MyVar;