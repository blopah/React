import React, { useState } from 'react'
import If from "./If";

const MyVar = props => {

    const [name, setName] = useState('2')

    return <div>
        <div className="condicional">
            <h2>O número</h2>
            <input placeholder="2" type="number" className="input oito" value={name}
                onChange={e => setName(e.target.value)}
            />
            <h2>é</h2>
        </div>
        <If test={name % 2 === 0}>
            <h1>Par</h1>
        </If>
        <If test={name % 2 === 1}>
            <h1>Impar</h1>
        </If>
    </div>
}

export default MyVar;