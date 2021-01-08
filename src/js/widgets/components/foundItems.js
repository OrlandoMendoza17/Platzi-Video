import React from 'react';
import PropTypes from 'prop-types'
import PlayList from '../..//playlist/components/playlist';

function FoundItems(props){
  return(
    <div className="Category mb-4">
      
      <div className="Category-title">
        <span className="text-secondary">Resultados de Busqueda</span>
        <h3>{props.inputSearch}</h3>
      </div>
      
      <PlayList 
        playlist={props.foundItems}
        handleOpenModal={props.handleOpenModal}
      /> 
      
    </div>
  )
}

FoundItems.propTypes = {
  foundItems: PropTypes.array
}

export default FoundItems;