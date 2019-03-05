import React, { Component } from 'react';
import Profile from './Components/Profile/Profile.js';
import Filter from './Components/Filter/Filter.js'
import dogs from './JSON/dogs.json';
import filters from './JSON/filters.json';
import './App.css';

class App extends Component {

  render() {
    let profiles = Object.keys(dogs).map( function (dog) {
      return <Profile key={ dog } breed={ dog } traits={ dogs[dog] }></Profile>
    })

    let filterList = Object.keys(filters).map( function (filter) {
      return <Filter key={ filter } attribute={ filter } childAttributes={ Object.keys(filters[filter]) }></Filter>
    })

    return (
      <div className="container App">
        <header className="App-header">
          <h1>Dog Finder</h1>
        </header>
        <div className="row">
          <nav className="col-sm-3">
            { filterList }
          </nav>
          <main className="col-sm-9">
            <div className="row">
              { profiles }
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
