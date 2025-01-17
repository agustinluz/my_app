import React, { Component } from 'react'

export default class HelloComponent extends Component {
    render() {
        return (
            <div>
                <h1>HOLAAA {this.props.nombre}</h1>
            </div>
        )
    }
}