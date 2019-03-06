import React, { Component } from 'react';
import Profile from './Components/Profile/Profile.js';
import Filter from './Components/Filter/Filter.js';
import utility from './Utility/Utility.js';
import dogs from './JSON/dogs.json';
import filters from './JSON/filters.json';
import './App.css';

// this should be moved to a utily file
let parentFilters = Object.keys(filters);
let allFilters = utility.buildFilterList();

class App extends Component {
  constructor() {
    super();
    this.state = {}

    // this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    //Builds initial state by iterating over the filter list
    this.setIntialState();
  }

  setIntialState() {
    for (let i=0; i < allFilters.length; i++){
      this.setState({ [allFilters[i]] : [ 1 , 5 ]})
    }
  }

  handleFilter(target, value) {
    console.log('this is: ', target, ' ', value);
  }

  render() {

    let profiles = Object.keys(dogs).map( dog => {
      return <Profile key={ dog } breed={ dog } traits={ dogs[dog] }></Profile>
    })

    let filterList = parentFilters.map( filter => {
      return (
        <Filter key={ filter } attribute={ filter } childAttributes={ Object.keys(filters[filter]) } filterClicked={ (target, value) => this.handleFilter(target, value) }></Filter>
      );
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
