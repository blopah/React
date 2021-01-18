// css
import './card.css'
// react
import React from 'react'

const myVar = (props) => {
    return <div className="card" style={{backgroundColor: props.color || '#F7B733'}}>
        <div className="conteudo">
            {props.children}
        </div>
        <div className="footer" style={{backgroundColor: props.color || '#F7B733'}}>
            {props.titulo}
        </div>
    </div>
};

export default myVar;