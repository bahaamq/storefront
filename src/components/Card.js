import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useSelector,useDispatch} from 'react-redux'
import {getProduct} from '../store/actions'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    marginTop:'4%',
    background:'whitesmoke'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  custom:{
    width:'44%',
    margin:'auto',
  }

  

}));

export default function RecipeReviewCard(props) {
    //Hooks
  const classes = useStyles();
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  
console.log("STATEE", state)



 console.log(props)

  return (
    <div class={classes.custom} >
{props.data.map((item)=>{
  return(
    <Card className={classes.root} onClick={()=>dispatch(getProduct(item))}>
    <CardHeader
 
   
      title={item.name}
    />
    <CardMedia
      className={classes.media}
      image={item.img}
      title="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
{item.description}

      </Typography>
    </CardContent>
   
  </Card>
  )
})}
   
    </div>

  );
}


