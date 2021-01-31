import React, {useState} from 'react'
import Estado from './Filha.jsx'

const YourVar = (props) => {

    var todays;

    function newDate() {
        todays = new Date();
    }

    setInterval(newDate, 1000)

    function clikou() {
        console.log(todays.getSeconds())
    }

    function world(plan) {
        return plan + ' Terra';
    }

    return <div>
        <Estado mundo={world}>Hello</Estado>
        <div onClick={clikou} className="button">getSeconds</div>
    </div>
};

export default YourVar;