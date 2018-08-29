import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import './CardView.css';


const cardView = (props) => {
  return (
    <Card className="flexitem">
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {props.headline}
        </Typography>
        <Typography component="p">
          {props.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={props.link} size="medium">
        View Article
        </Button>
      </CardActions>
    </Card>);
};

export default cardView;