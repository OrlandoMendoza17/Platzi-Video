import React, {Component} from 'react'
import { connect } from 'react-redux'
import SearchForm from '../components/searchForm'

class Search extends Component{
  handleClick = () => {
    console.log(this.props.title)
  }
  clearInputAndMessage = () => {
    this.input.value = ""
  }
  handleSubmit= (event) =>{
    const SEARCH = this.input.value
    event.preventDefault()
    this.props.dispatch({
      type: "SEARCH_VIDEO",
      payload: SEARCH
    })
    this.clearInputAndMessage()
  }
  setInputRef = (element) =>{
    this.input = element;
  }
  
  render(){
    return(
      <div className="Search mb-2">
        <SearchForm
          setRef={this.setInputRef}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default connect ()(Search);