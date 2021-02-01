import React from 'react'

const YourVar = (props) => {

    // variavel que vai armazenar a data
    // var todays;
    // funcao que vai inserir a data na variavel
    // function newDate() {
    //     todays = new Date();
    // }
    // newDate()
    // funcao que renova a data a cada 1 segundo
    // setInterval(newDate, 1000)
    // funcao que joga a data no console
    
    function plane() {
        return props.mundo('Planeta')
    }

    const planet = plane();

    return <div>
        <p>{props.children} {planet}</p>
    </div>
}

export default YourVar;