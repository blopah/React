// css
import './index.css'

// react
import React from 'react'
import ReactDOM from 'react-dom'

// components
import Primeiro from './components/Primeiro'
import Card from './components/layout/card'

ReactDOM.render(
    <div>
        <Primeiro titulo="este é o titulo"></Primeiro>
        <Card titulo="5">Pablo</Card>
        <Card titulo="8">Apollo</Card>
        <Card titulo="1">Vitoria</Card>
        <Card titulo="5">Rafael</Card>
        <Card titulo="3">Bete</Card>
    </div>,
    document.getElementById('root')
)