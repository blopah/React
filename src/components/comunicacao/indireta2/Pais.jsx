import React from 'react'
import Estado from './Estado.jsx'

const myVar = (props) => {

    function world(plan) {
        return plan + 'uhuuu';
    }

    return <div>
        <Estado mundo={world}>Ola </Estado>
    </div>
};

export default myVar;