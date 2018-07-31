import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import classes from './Country.css';

const importAll = r => r.keys().map(r);

const armenia = importAll(require.context('../../../public/recommendations/armenia', false, /\.(pdf)$/));
const azerbaijan = importAll(require.context('../../../public/recommendations/azerbaijan', false, /\.(pdf)$/));
const georgia = importAll(require.context('../../../public/recommendations/azerbaijan', false, /\.(pdf)$/));
const turkey = importAll(require.context('../../../public/recommendations/turkey', false, /\.(pdf)$/));
const russia = importAll(require.context('../../../public/recommendations/russia', false, /\.(pdf)$/));
const iran = importAll(require.context('../../../public/recommendations/iran', false, /\.(pdf)$/));
const unitedStates = importAll(require.context('../../../public/recommendations/unitedStates', false, /\.(pdf)$/));
const china = importAll(require.context('../../../public/recommendations/china', false, /\.(pdf)$/));
const kurdistan = importAll(require.context('../../../public/recommendations/kurdistan', false, /\.(pdf)$/));
const europeanUnion = importAll(require.context('../../../public/recommendations/europeanUnion', false, /\.(pdf)$/));
const other = importAll(require.context('../../../public/recommendations/other', false, /\.(pdf)$/));

// To add new country first create a new file in public/recomendation folder.

const Country = (props) => {
  switch (props.match.params.country) {
  case 'armenia':
    return (
      <ul className={classes.flexcontainer}>
        <Card className={classes.flexitem}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                For Armenia
            </Typography>
            <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <a href={`/recommendations/armenia${armenia[0]}`}>
                  View Article
              </a>
            </Button>
          </CardActions>
        </Card>
      </ul>
    );
  case 'azerbaijan':
    return (
      <ul className={classes.flexcontainer}>
        <Card className={classes.flexitem}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                For Azerbaijan
            </Typography>
            <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <a href={`/recommendations/azerbaijan${azerbaijan[0]}`}>
                  View Article
              </a>
            </Button>
          </CardActions>
        </Card>
      </ul>
    );

  case 'georgia':
    return (
      <ul className={classes.flexcontainer}>
        <Card className={classes.flexitem}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                For Georgia
            </Typography>
            <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <a href={`/recommendations/georgia${georgia[0]}`}>
                  View Article
              </a>
            </Button>
          </CardActions>
        </Card>
      </ul>
    );

  case 'turkey':
    return (
      <ul className={classes.flexcontainer}>
        <Card className={classes.flexitem}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                For Turkey
            </Typography>
            <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <a href={`/recommendations/turkey${turkey[0]}`}>
                  View Article
              </a>
            </Button>
          </CardActions>
        </Card>
      </ul>
    );

  case 'russia':
    return (
      <ul className={classes.flexcontainer}>
        <Card className={classes.flexitem}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                For Russia
            </Typography>
            <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <a href={`/recommendations/russia${russia[0]}`}>
                  View Article
              </a>
            </Button>
          </CardActions>
        </Card>
      </ul>
    );

  case 'iran':
    return (
      <ul className={classes.flexcontainer}>
        <Card className={classes.flexitem}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                For Iran
            </Typography>
            <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <a href={`/recommendations/iran${iran[0]}`}>
                  View Article
              </a>
            </Button>
          </CardActions>
        </Card>
      </ul>
    );

  case 'unitedStates':
    return (
      <ul className={classes.flexcontainer}>
        <Card className={classes.flexitem}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                For United States
            </Typography>
            <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <a href={`/recommendations/unitedStates${unitedStates[0]}`}>
                  View Article
              </a>
            </Button>
          </CardActions>
        </Card>
      </ul>
    );

  case 'china':
    return (
      <ul className={classes.flexcontainer}>
        <Card className={classes.flexitem}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                For China
            </Typography>
            <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <a href={`/recommendations/china${china[0]}`}>
                  View Article
              </a>
            </Button>
          </CardActions>
        </Card>
      </ul>
    );

  case 'kurdistan':
    return (
      <ul className={classes.flexcontainer}>
        <Card className={classes.flexitem}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                For Kurdistan
            </Typography>
            <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <a href={`/recommendations/kurdistan${kurdistan[0]}`}>
                  View Article
              </a>
            </Button>
          </CardActions>
        </Card>
      </ul>
    );

  case 'europeanUnion':
    return (
      <ul className={classes.flexcontainer}>
        <Card className={classes.flexitem}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                For European Union
            </Typography>
            <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <a href={`/recommendations/europeanUnion${europeanUnion[0]}`}>
                  View Article
              </a>
            </Button>
          </CardActions>
        </Card>
      </ul>
    );

  case 'other':
    return (
      <ul className={classes.flexcontainer}>
        <Card className={classes.flexitem}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                For Other
            </Typography>
            <Typography component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <a href={`/recommendations/other${other[0]}`}>
                  View Article
              </a>
            </Button>
          </CardActions>
        </Card>
      </ul>
    );

    /* case 'turkey':
    return (
      <ul className={classes.flexcontainer}>
        <li className={classes.flexitem}>
          <a href={`/recommendations/turkey${turkey[0]}`}>
            Map of Turkey1
          </a>
          <a href={`/recommendations/turkey${turkey[1]}`}>
            Map of Turkey2
          </a>
        </li>
      </ul>
    ); */

  default: return (
    <p>No such Country</p>
  );
  }
};

export default Country;
