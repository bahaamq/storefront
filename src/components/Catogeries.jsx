import React from 'react'
import {connect} from 'react-redux';
import {funActiveCategory} from '../store/Categories'
import {getBased} from '../store/Products'

import Button from '@material-ui/core/Button';

function Catogeries(props) {

  function handlclick(category)
  {
props.funActiveCategory(category)
props.getBased(category)
  }
  return (
    <div>
      {
      props.categories.Categories &&
      props.categories.Categories.map((item)=>{
        return(
          <Button variant="outlined" color="primary"

           onClick={()=>handlclick(item.name)}>{item.name}     </Button>

        )
      })
      }
    </div>
  )
}
const mapStateToProps = (state)=>{
  console.log("STATE???",state)
  return {categories:state.categories,products:state.products}
}

const mapDispatchToProps = {funActiveCategory,getBased};

//HOC??
export default connect(mapStateToProps,mapDispatchToProps)(Catogeries);
