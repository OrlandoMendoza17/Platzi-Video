import React, {Component} from 'react'
import SearchIcon from '../../icons/components/search-icon'

class Search extends Component{
  handleClick = () => {
    console.log(this.props.title)
  }
  
  render(){
    return(
      <div className="Search mb-2">
        <form action="" className="d-inline-block">
          <div className="input-container p-2">
            
            <input type="text" className="p-1" placeholder="Busca a un artista, tema o amigo"/>
            <SearchIcon className="mr-1" size={20} color={'#171b2f'} />
            
          </div>
        </form>
      </div>
    )
  }
}

export default Search;