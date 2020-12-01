import React from 'react'
import Friend from './friend'

function RelatedSection(props){
  
  const arreglo = [1,2,3,4,5,6,7,8,9,10]
  return(
    <div className="RelatedSection">
      
      <h2 className="title">{props.nameSection}</h2>    
      
      <div className="RelatedSection-container px-2">
        {
          arreglo.map(()=>{
            return <Friend src="../images/covers/felices.jpg" name="Orlando Mendoza"/>
          })
        }
      </div>
      
    </div>
  )
}

export default RelatedSection;