import React from 'react'
import produtos from '../Data/produtos'

const myVar = (props) => {
    function getProdutosListItem() {
        return produtos.map(prod => {
            return <li key={prod.id}>
                {prod.nome} tem {prod.idade} anos
                </li>
        })
    }

    return <div>
        <h2>Repetição</h2>
        <ul>
            {getProdutosListItem()}
        </ul>
    </div>
}

export default myVar;