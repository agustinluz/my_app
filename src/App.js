import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloComponent from './components/HelloComponent';
import InputComponent from './components/InputComponent';
import ClockComponent from './components/ClockComponent';
import Toggle from './components/toggle';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Agustin',
    };
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ClockComponent />
          <img src={logo} className="App-logo" alt="logo" />
          <HelloComponent nombre={this.state.name} />
          <InputComponent nombre={this.state.name} cambiarNombre={this.changeName} />
          <Toggle /> {/* Incluye el componente Toggle */}
        </header>
      </div>
    );
  }
}

export default App;
