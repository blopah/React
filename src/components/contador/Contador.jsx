import './Contador.css'
import React, { Component } from 'react'
import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'

const myVar = class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0,
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }



    render() {

        return (
            <div className="contador">
                {/* <h1 className="enunciado">Contador</h1> */}
                
                <Display valor={this.state.valor}></Display>
                <PassoForm passo={this.state.passo} 
                onPassoChange={this.mudarPasso}></PassoForm>
                <Botoes incr={this.inc} decr={this.dec}></Botoes>

            </div>
        )
    }
}

export default myVar;