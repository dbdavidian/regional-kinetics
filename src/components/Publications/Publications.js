import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import classes from './Publications.css';

const importAll = r => r.keys().map(r);

const images = importAll(require.context('../../../public/publications', false, /\.(pdf)$/));

const Publications = () => (
  <ul className={classes.flexcontainer}>

    {/* <li className={classes.flexitem}>
      <a href={`/publications${images[0]}`}>
        armenia-migration
      </a>
    </li>
    <li className={classes.flexitem}>
      <a href={`/publications${images[1]}`}>
        azerbaijan-map
      </a>
    </li>
    <li className={classes.flexitem}>
      <a href={`/publications${images[2]}`}>
        pdf-sample
      </a>
    </li> */}

    <Card className={classes.flexitem}>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Oligarchies and Strategic Danger to Small State Security
        </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <a href={`/publications${images[0]}`}>
            Learn More
          </a>
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.flexitem}>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Returns on Diplomatic Investment Zionist Policies and the Armenians
        </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <a href={`/publications${images[1]}`}>
            Learn More
          </a>
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.flexitem}>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          The Challenge of the Indigenous Arms Industry
        </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <a href={`/publications${images[2]}`}>
            Learn More
          </a>
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.flexitem}>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          The Programmable Diplomatic Kill Switch
        </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000 species
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <a href={`/publications${images[3]}`}>
            Learn More
          </a>
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.flexitem}>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Why Azerbaijan is unable to offer viable solutions to the Nagorno-Karabakh Conflict
        </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <a href={`/publications${images[4]}`}>
            Learn More
          </a>
        </Button>
      </CardActions>
    </Card>

    {/* add pdf file in  /public/publications and then
    <a href={`/publications${images[3]}`}>title</a> note the order in /public/publications */}
  </ul>
);

export default Publications;
