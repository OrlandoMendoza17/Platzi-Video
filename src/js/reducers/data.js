const reducer = (state, action) => {
  
  const categories = state.data.categories
  
  const filterSearchBy = (featureToFilter, list) =>{
    const foundItems = list.filter(item =>{
      debugger
      const authorName = item[featureToFilter].toLocaleLowerCase()
      const SEARCH = action.payload.toLocaleLowerCase()
      return authorName.includes(SEARCH)
    })
    
    return foundItems;
  }
  
  switch (action.type) {
    case 'SEARCH_VIDEO':{
      if(action.payload){
        debugger
        const list = categories.map(({ playlist }) => playlist ).flat()
        
        let foundItems = filterSearchBy("author", list).concat(
          filterSearchBy("title", list)
        )
        
        foundItems = foundItems.filter((item, index)=>{
          return foundItems.indexOf(item) === index
        })
        return{
          data: state.data,
          search: {
            inputSearch: action.payload,
            foundItems
          }
        }
      }
      return {
        data: state.data,
        search: null
      };
    }
    default:
      return {
        data: state.data,
        search: null
      };
  }
}

export default reducer;