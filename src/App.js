import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container App">
        <header className="App-header">
          <h1>Dog Finder</h1>
        </header>
        <div className="row">
          <nav className="col-sm-3"></nav>
          <main className="col-sm-9"></main>
        </div>
      </div>
    );
  }
}

export default App;
