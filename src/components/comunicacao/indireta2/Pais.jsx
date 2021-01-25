import React, {useState} from 'react'
import Estado from './Estado.jsx'

const MyVar = (props) => {

    var today;

    function newDate() {
        today = new Date();
    } /*Pega nova data*/

    setInterval(newDate, 1000) /*atualiza a data*/

    function clikou() {
        console.log(today.getSeconds())
    }

    function world(plan) {
        return plan + ' Terra';
    }

    return <div>
        <Estado mundo={world}>Hello</Estado>
        <button onClick={clikou}>getSeconds</button>
    </div>
};

export default MyVar;