import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import classes from './Publications.css';

const importAll = r => r.keys().map(r);

const pdfs = importAll(require.context('../../../public/publications', false, /\.(pdf)$/));

const Publications = () => (
  <ul className={classes.flexcontainer}>
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
          <a href={`/publications${pdfs[0]}`}>
            View Article
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
          <a href={`/publications${pdfs[1]}`}>
            View Article
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
          <a href={`/publications${pdfs[2]}`}>
            View Article
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
          <a href={`/publications${pdfs[3]}`}>
            View Article
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
          <a href={`/publications${pdfs[4]}`}>
            View Article
          </a>
        </Button>
      </CardActions>
    </Card>

    {/* add pdf file in  /public/publications and then here. */}
  </ul>
);

export default Publications;
