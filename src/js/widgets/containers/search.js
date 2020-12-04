import React, {Component} from 'react'
import SearchForm from '../components/searchForm'

class Search extends Component{
  handleClick = () => {
    console.log(this.props.title)
  }
  handleChange= (event) =>{
    event.preventDefault()
    alert(`Funcionó, ${this.input.value} es el valor ingresado`)
    console.log(event)
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