// css
import './card.css'
// react
import React from 'react'

const myVar = (props) => {
    return <div className="card">
        <div className="conteudo">
            {props.children}
        </div>
        <div className="footer">
            {props.titulo}
        </div>
    </div>
};

export default myVar;