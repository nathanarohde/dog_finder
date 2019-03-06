import React from 'react'
import './Filter.css';

// Add range sliders here
const filter = ( props ) => {
  let childFilters = props.childAttributes.map( child => {
    return (
      <div key={ child }>
        <p>{ child }</p>
        <div>
          <div className="circle" onClick={props.filterClicked(child, 1)} value="1"></div>
          <div className="circle" onClick={props.filterClicked(child, 2)} value="2"></div>
          <div className="circle" onClick={props.filterClicked(child, 3)} value="3"></div>
          <div className="circle" onClick={props.filterClicked(child, 4)} value="4"></div>
          <div className="circle" onClick={props.filterClicked(child, 5)} value="5"></div>
        </div>
      </div>
    )
  });

  return (
    <div>
      <p>{ props.attribute }</p>
      <div>
       <div className="circle" onClick={props.filterClicked(props.attribute, 1)} value="1"></div>
       <div className="circle" onClick={props.filterClicked(props.attribute, 2)} value="2"></div>
       <div className="circle" onClick={props.filterClicked(props.attribute, 3)} value="3"></div>
       <div className="circle" onClick={props.filterClicked(props.attribute, 4)} value="4"></div>
       <div className="circle" onClick={props.filterClicked(props.attribute, 5)} value="5"></div>
      </div>
      { childFilters }
    </div>
  )
}

export default filter;
