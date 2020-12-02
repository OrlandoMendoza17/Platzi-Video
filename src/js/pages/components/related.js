import React from 'react';
import ImageBrand from '../../icons/components/imageBrand';
import RelatedSection from '../../aside/components/relatedSection'
import RelatedItem from '../../aside/components/relatedItem';
import RelatedItemNumber from '../../aside/components/relatedItemNumber';
import RelatedItemImage from '../../aside/components/relatedItemImage';

function Related(props){
  return(
    <aside className="Related">
      <div className="Related-container px-3 pb-3">
        
        <ImageBrand/>
        
        <RelatedSection key={1} nameSection="Mi Playlist">
          {
            props.playlist.map(({title, id})=>(
                
              <RelatedItem name={title} key={id}>
                <RelatedItemNumber id={id} />
              </RelatedItem>
            ))
          }
        </RelatedSection>
        
        <RelatedSection key={2} nameSection="Playlist de Amigos">
          {
            props.users.map(({name, image, id})=>(
                
              <RelatedItem name={name} key={id}>
                <RelatedItemImage id={image} />
              </RelatedItem>
            ))
          }
        </RelatedSection>
          
      </div>
    </aside>
  )
}

export default Related;