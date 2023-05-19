import React, { Component } from 'react'

export default class IncrementOnClickClassComonent extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
      <div>
           <button onClick={() => this.props.MSG("Hello From Child")} >btn</button>
      </div>
    )
  }
}
