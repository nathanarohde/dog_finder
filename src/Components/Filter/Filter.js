import React from 'react'
import './Filter.css';

// Add range sliders here
const filter = ( props ) => {
  let childFilters = props.childAttributes.map( function(child) {
    return <div>
            <p key={ child }>{ child }</p>
            <div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
           </div>
  })

  return (
    <div>
      <p>{ props.attribute }</p>
      <div>
       <div className="circle"></div>
       <div className="circle"></div>
       <div className="circle"></div>
       <div className="circle"></div>
       <div className="circle"></div>
      </div>
      { childFilters }
    </div>
  )
}

export default filter;
