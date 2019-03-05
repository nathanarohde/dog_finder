import filters from '../JSON/filters.json';

let parentFilters = Object.keys(filters);

const utility = {
  buildFilterList: function() {
    let childFilters = [];
    let filtersList = [];
    for (let i=0; i < parentFilters.length; i++){
      childFilters = Object.keys(filters[parentFilters[i]]);
      filtersList.push( parentFilters[i] );
      //If child filters are not present will this break?
      filtersList.push( ...childFilters );
    }
    return filtersList;
  }
}

export default utility;
