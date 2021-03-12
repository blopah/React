import React, {useState} from "react";

const MyVar = props => {

    const [name, setName] = useState('1')

    return <div>
        <div className="condicional">
            <h2>O número</h2>
            <input placeholder="2" type="number" className="input oito" value={name}
                onChange={e => setName(e.target.value)}
            />
            <h2>é</h2>
        </div>
        {name % 2 === 0 ?
        <h1>Par</h1>
        : <h1>Ímpar</h1>
        }
    </div>
}

export default MyVar;