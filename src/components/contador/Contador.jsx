import React, {Component} from 'react'

const myVar = class Contador extends Component {
    render () {
        return (
            <>
                <h2>Contador</h2>
                <h4>Display</h4>
                <div>
                    <button>+</button>
                    <button>-</button>
                </div>
            </>
        )
    }
}

export default myVar;