import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Toggle.css'; // Estilos adicionales personalizados

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center toggle-container">
        <button
          className={`btn btn-lg toggle-button ${
            this.state.isToggleOn ? 'btn-success' : 'btn-danger'
          }`}
          onClick={this.handleClick}
        >
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}
