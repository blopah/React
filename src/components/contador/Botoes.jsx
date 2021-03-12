import React from 'react'

const myVar = (props) => {
    return(
        <div className="buttons-group">
            <div className="button-contador" onClick={props.incr}>+</div>
            {/* <Display valor={this.state.valor}></Display> */}
            <div className="button-contador" onClick={props.decr}>-</div>
        </div>
    )
}

export default myVar;