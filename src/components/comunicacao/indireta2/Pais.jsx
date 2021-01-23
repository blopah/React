import React from 'react'
import Estado from './Estado.jsx'

const myVar = (props) => {

    function world(plan) {
        return plan + ' Terra';
    }

    return <div>
        <Estado mundo={world}>Hello </Estado>
    </div>
};

export default myVar;