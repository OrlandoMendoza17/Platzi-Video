import React from 'react'
import Search from '../../widgets/containers/search'
import Category from './category'

function Categories(props){
  return(
    <div className="Categories p-3">
      <Search title="Hola, este es el titulo"/>
      {
        props.categories.map((category) => {
          
          return <Category {...category} key={category.id} /> 
           
        })
      }
    </div>
  )
}
export default Categories;