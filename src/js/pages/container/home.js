import React, { Component } from 'react';
import HomeLayout from '../components/HomeLayout'
import Related from '../components/related';
import ImageBrand from '../../icons/components/imageBrand';
import RelatedSection from '../../aside/components/relatedSection'
import Categories from '../../categories/components/categories';
import data from '../../../api.json'

console.log(data)

class Home extends Component{
  
  setRef = (element) => {
    this.media = element
  }
  
  render(){
    return(
      
      <HomeLayout>
        
        <Related>
          
          <ImageBrand/>
          <RelatedSection nameSection="Mi Playlist"/>
          <RelatedSection nameSection="Playlist de Amigos"/>
          
        </Related>
        
        <Categories 
          categories={data.categories}
          handleClick={this.handleClick}
          setRef={this.setRef}
        />
        
      </HomeLayout>
      
    )
  }
}

export default Home;