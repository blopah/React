import React, {Component} from 'react'

const myVar = class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0,
    }

    render () {
        return (
            <>
                <h2>Contador</h2>
                <h4>Passo: {this.state.passo}</h4>
                <h4>Valor: {this.state.valor}</h4>
                
                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
            </>
        )
    }
}

export default myVar;