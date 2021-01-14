// css
import '../index.css'

// react
import React from 'react'

// components
import Primeiro from './Primeiro'
import Card from './layout/card'

const myVar = (props) => {
    return <div className="App">
        {/* <Primeiro titulo="este é o titulo"></Primeiro> */}
        <Card titulo="5">Pablo</Card>
        <Card titulo="8">Apollo</Card>
        <Card titulo="1">Vitoria</Card>
        <Card titulo="5">Rafael</Card>
        <Card titulo="3">Bete</Card>
        <Card titulo="3">Rodrigo</Card>
    </div>
};

export default myVar;