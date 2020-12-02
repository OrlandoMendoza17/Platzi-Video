import React from 'react'

function RelatedSection(props){
  console.log(props)
  return(
    <div className="RelatedSection">
      
      <h2 className="title">{props.nameSection}</h2>    
      
      <div className="RelatedSection-container px-2">
        {
          props.children
        }
      </div>
      
    </div>
  )
}

export default RelatedSection;