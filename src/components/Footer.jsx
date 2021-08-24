import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#d3d3d3',
        paddingTop: '1.25%', // 16:9
        marginTop:'2.99%'    
    
      },
  

}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
 

  return (
    <div class={classes.custom}>
   <footer className={classes.footer}>
       
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
2021
        </Typography>
      </footer>
   
    </div>

  );
}
