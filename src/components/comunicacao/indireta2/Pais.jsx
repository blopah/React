import React from 'react'
import Estado from './Estado.jsx'

const YourVar = (props) => {
    
    // funcao que pega o retorno do componente filho e retorna
    function world(plan) {
        return plan + ' segundos';
    }

    var [sec, setSec] = React.useState(new Date().getSeconds());
    
    function getSec() {
        setSec(new Date().getSeconds())
    }
    
    // setInterval(setSec(sec += 1), 1000)

    return <div>
        <h4><Estado mundo={world}>Descubra</Estado></h4> {/* chama o componente filho, enviando a funcao e tambem childrens */}
        <div className="button" onClick={getSec}>Segundo: {sec}</div> {/* botao */}
    </div>
};

export default YourVar;