import React, {Component} from 'react'
import SearchForm from '../components/searchForm'

class Search extends Component{
  handleClick = () => {
    console.log(this.props.title)
  }
  handleChange= (event) =>{
    event.preventDefault()
    alert(`Buscate: "${this.input.value}". La opcion del buscador aún no está disponible`)
    this.input.value = ""
  }
  setInputRef = (element) =>{
    this.input = element;
  }
  
  render(){
    return(
      <div className="Search mb-2">
        <SearchForm
          setRef={this.setInputRef}
          handleSubmit={this.handleChange}
        />
      </div>
    )
  }
}

export default Search;