import './Contador.css'
import React, { Component } from 'react'
import Display from './Display'

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



    render() {

        return (
            <div className="contador">
                <h2>Contador</h2>
                <h4>Passo: {this.state.passo}</h4>
                <input type="number" value={this.state.passo}
                    onChange={e => this.setState({ passo: +e.target.value })} />
                <Display valor={this.state.valor}></Display>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}

export default myVar;