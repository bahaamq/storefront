import {React,useEffect} from 'react'
import {connect} from 'react-redux';
import {getBased} from '../store/actions'
import RecipeReviewCard from './Card'


//Matrial UI

function Products(props) {

console.log(props.products.activeProducts)
  return (
    <div>
{

props.products.activeProducts.length>0 &&
<RecipeReviewCard data={props.products.activeProducts} />

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
