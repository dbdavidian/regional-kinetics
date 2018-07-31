import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import classes from './CardView.css';


const cardView = (props) => {
  return (<Card className={classes.flexitem}>
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        {props.headline}
      </Typography>
      <Typography component="p">
        {props.body}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        <a href={props.link}>
            View Article
        </a>
      </Button>
    </CardActions>
  </Card>);
};

export default cardView;