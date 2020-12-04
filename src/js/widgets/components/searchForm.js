import React from 'react'
import SearchIcon from '../../icons/components/search-icon'

function SearchForm(props){
  return(
    <form onSubmit={props.handleSubmit} className="SearchForm d-inline-block">
      <div className="input-container p-2">
        
        <input 
          ref={props.setRef}
          type="text" 
          className="p-1" 
          placeholder="Busca a un artista, tema o amigo"
          defaultValue={'Luis Fonsi'}
        />
        <button type="submit">
          <SearchIcon className="mr-1" size={20} color={'#171b2f'} />
        </button>
        
      </div>
    </form>
  )
}

export default SearchForm;