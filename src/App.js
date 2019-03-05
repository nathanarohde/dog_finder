import React, { Component } from 'react';
import Profile from './Components/Profile/Profile.js';
import Filter from './Components/Filter/Filter.js'
import dogs from './JSON/dogs.json';
import filters from './JSON/filters.json';
import './App.css';

// How is this added to the state.
// What value is assigned to the created state?
// https://reactjs.org/docs/react-component.html - costructor()
let parentFilters = Object.keys(filters);
let allFilters = [];

function buildFilterList() {
  let childFilters = [];
  for (let i=0; i < parentFilters.length; i++){
    childFilters = Object.keys(filters[parentFilters[i]]);
    allFilters.push( parentFilters[i] );
    allFilters.push( ...childFilters );
  }
};

buildFilterList();
console.log(allFilters);

class App extends Component {

  render() {
    let profiles = Object.keys(dogs).map( function (dog) {
      return <Profile key={ dog } breed={ dog } traits={ dogs[dog] }></Profile>
    })

    let filterList = parentFilters.map( function (filter) {
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
