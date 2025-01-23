import React, { Component } from 'react';
import './ClockComponent.css'; // Asegúrate de tener este archivo de estilos
class ClockComponent extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
      clicked: false, // Estado para controlar el cambio de color
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleClick = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked, // Cambiar el estado al hacer clic
    }));
  };

  render() {
    const { time, clicked } = this.state;
    const clockClass = clicked ? 'clock clicked' : 'clock'; // Condicional para agregar la clase 'clicked'

    return (
      <div className={clockClass} onClick={this.handleClick}>
        {time}
      </div>
    );
  }
}

export default ClockComponent;
