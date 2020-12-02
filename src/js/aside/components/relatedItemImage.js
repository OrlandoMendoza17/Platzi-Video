import React from 'react'

function RelatedItem_Number(props){
  return(
    <figure className="RelatedItem-Image">
      <img 
        src={props.id} 
        alt={`${props.name} Imagen de Usuario`}
      />
    </figure>
  )
}

export default RelatedItem_Number;