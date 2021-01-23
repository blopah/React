import React from 'react'
import Estado from './Estado.jsx'

const myVar = (props) => {

    function world(plan) {
        return plan + ' Terra';
    }

    return <div>
        <Estado mundo={world}>Olar </Estado>
    </div>
};

export default myVar;