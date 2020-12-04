import React from 'react'
import PropTypes from 'prop-types'
import Search from '../../widgets/containers/search'
import Category from './category'

function Categories(props){
  return(
    <div className="Categories p-3">
      <Search title="Hola, este es el titulo"/>
      {
        props.categories.map((category) => {
          
          return <Category {...category} handleOpenModal={props.handleOpenModal} key={category.id} /> 
           
        })
      }
    </div>
  )
}

Categories.propTypes = {
  categories: PropTypes.array
}

export default Categories;