import React, { Component } from 'react';
import PropTypes from 'prop-types'
import HomeLayout from '../components/HomeLayout'
import Related from '../components/related';
import Categories from '../../categories/components/categories';

class Home extends Component{
  
  setRef = (element) => {
    this.media = element
  }
 
  render(){
    return(
      
      <HomeLayout>
        
        <Related
          playlist={this.props.playlist}
          users={this.props.users}
        />
        
        <Categories 
          categories={this.props.categories}
          handleClick={this.handleClick}
          setRef={this.setRef}
        />
        
      </HomeLayout>
      
    )
  }
}

Home.propTypes = {
  categories: PropTypes.array,
  playlist: PropTypes.array,
  users: PropTypes.array,
}
export default Home;