import React from 'react'
import PropTypes, {func} from 'prop-types'
import Search from '../../widgets/containers/search'
import Category from './category'
import FoundItems from '../../widgets/components/foundItems'

// function verifySearch(stateSearch){
//   return Object.values(stateSearch).length
// }
function Categories(props){
  console.log(props)
  return(
    <div className="Categories p-3">
      <Search title="Hola, este es el titulo"/>
      {
        // Si search en el store es un objeto vacio entonces no se muestra
        props.search &&
        <FoundItems 
          {...props.search} 
          handleOpenModal={props.handleOpenModal} 
        />
      }
      {
        props.categories.map((category) => (
          <Category 
            {...category} 
            handleOpenModal={props.handleOpenModal} 
            key={category.id} 
          />
        ))
      }
    </div>
  )
}

Categories.propTypes = {
  categories: PropTypes.array
}

export default Categories;