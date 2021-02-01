import React from 'react'
import Estado from './Estado.jsx'

const YourVar = (props) => {
    
    // funcao que pega o retorno do componente filho e retorna
    function world(plan) {
        return plan + ' Terra';
    }

    var [sec, setSec] = React.useState(new Date().getSeconds());

    // setInterval(setSec(sec += 1), 1000)

    return <div>
        <Estado mundo={world}>Ola</Estado> {/* chama o componente filho, enviando a funcao e tambem childrens */}
        <div className="button">Second: {sec}</div> {/* botao */}
    </div>
};

export default YourVar;