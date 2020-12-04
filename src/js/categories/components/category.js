import React from 'react';
import PropTypes from 'prop-types'
import PlayList from '../..//playlist/components/playlist';

function Category(props){
  return(
    <div className="Category mb-4">
      
      <div className="Category-title">
        <span className="text-secondary">{props.description}</span>
        <h3>{props.title}</h3>
      </div>
      
      <PlayList 
        playlist={props.playlist}
        handleOpenModal={props.handleOpenModal}
      /> 
      
    </div>
  )
}

Category.propTypes = {
  playlist: PropTypes.array
}

export default Category;