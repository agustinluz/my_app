import logo from './logo.svg';
import './App.css';
import HelloComponent from './components/HelloComponent';
import InputComponent from './components/InputComponent';
import React, { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super()
    this.state={
      name:'Agustin'
    }
  }
  changeName=(event)=>{
    this.setState({
      name: event.target.value
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HelloComponent nombre= {this.state.name}></HelloComponent>
          <InputComponent nombre={this.state.name} cambiarNombre={this.changeName}></InputComponent>
        </header>
      </div>
    );
  }
}

export default App;
