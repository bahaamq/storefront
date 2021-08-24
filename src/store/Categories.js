

const initialState = {
    Categories: [
        {name:"Food", display:"Meals", description:" up to 20% Sale"},
        {name:"Technology", display:"Technology", description:" up to 30% Sale"},
        {name:"Random", display:"requirements", description:" up to 40% Sale"}
    ],
        
        
        activeCategory: {},
  };
  
  const categoryReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case 'Active-Category':
        console.log("hello")
        var result = state.Categories.filter(obj => {
            return obj.name ===payload
          })

          return {
            //  Categories:state.Categories,in order not to lose it 
            Categories:state.Categories,
            activeCategory:result
          }

          
      default:
        return state;
    }
  };
  
 
  
 
  
  export default categoryReducer;