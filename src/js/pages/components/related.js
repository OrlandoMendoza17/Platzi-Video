import React, { Component } from 'react';
import ImageBrand from '../../icons/components/imageBrand';
import ButtonToggle from '../../aside/components/buttonToggle';
import RelatedSection from '../../aside/components/relatedSection'
import RelatedItem from '../../aside/components/relatedItem';
import RelatedFriend from '../../aside/components/relatedFriend';
import RelatedItemNumber from '../../aside/components/relatedItemNumber';
import RelatedItemImage from '../../aside/components/relatedItemImage';

class Related extends Component{
  state = {
    classRelated: ''
  }
  toggleDisplay = (event) =>{
    
    this.setState({
      classRelated: this.state.classRelated === 'onScreen' ? '' : 'onScreen'
    })
  }
  render(){
    return(
      <aside className="Related">
        <div className={`Related-container ${this.state.classRelated} px-3 pb-3`}>
          
          <ImageBrand/>
          
          {/* Mi Playlist */}
          <RelatedSection key={1} nameSection="Mi Playlist">
            {
              this.props.playlist.map((item)=>(
                  
                <RelatedItem {...item} key={item.id} handleOpenModal={this.props.handleOpenModal}>
                  <RelatedItemNumber id={item.id}/>
                </RelatedItem>
              ))
            }
          </RelatedSection>
          
          {/*Playlist de amigos */}
          <RelatedSection key={2} nameSection="Playlist de Amigos">
            {
              this.props.users.map(({name, image, id})=>(
                  
                <RelatedFriend name={name} key={id}>
                  <RelatedItemImage id={image} />
                </RelatedFriend>
              ))
            }
          </RelatedSection>
            
        </div>
        
        <ButtonToggle 
          handleClick={this.toggleDisplay}
        />
      </aside>
    )
  }
}

export default Related;