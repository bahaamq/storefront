import {React,useEffect} from 'react'
import {connect} from 'react-redux';
import {getBased} from '../store/Products'
import RecipeReviewCard from './Card'


//Matrial UI

function Products(props) {

console.log(props.products.activeProducts)
  return (
    <div>
{

props.products.activeProducts.length>0 &&
<RecipeReviewCard data={props.products.activeProducts} />
// props.products.activeProducts.map((item)=>{
//     return (
//         <>
//     <p>{item.name}</p>
//     <p>{item.description}</p>
//     <p>{item.inventoryCount}</p>
// <img src={item.img} alt="random"></img>
// </>
    
//     )
// })
}
    </div>
  )
}
const mapStateToProps = (state)=>{
  console.log("STATE???",state.categories)
  return {categories:state.categories,products:state.products}
}

const mapDispatchToProps = {getBased};

//HOC??
export default connect(mapStateToProps,mapDispatchToProps)(Products);
