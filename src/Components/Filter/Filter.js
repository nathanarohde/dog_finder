import React from 'react'

// Add range sliders here
const filter = ( props ) => {
  let childFilters = props.childAttributes.map( function(child) {
    return <p key={ child }>{ child }</p>
  })

  return (
    <div>
      <p>{ props.attribute }</p>
      { childFilters }
    </div>
  )
}

export default filter;
