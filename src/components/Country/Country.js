import React from 'react';
import classes from './Country.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const importAll = (r) => r.keys().map(r);

const armenia = importAll(require.context('../../../public/recommendations/armenia', false, /\.(pdf)$/));
const azerbaijan = importAll(require.context('../../../public/recommendations/azerbaijan', false, /\.(pdf)$/));
// to add new country first create a new file in public/recomandation folder. for example turkey then import as is done above.For
// example  const turkey = importAll(require.context('../../../public/recommendations/turkey', false, /\.(pdf)$/));

const Country = (props) => {
  switch (props.match.params.country) {
    case 'armenia':
      return (
        <ul className={classes.flexcontainer}>
          <Card className={classes.flexitem}>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Map of Armenia
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
                <a href={`/recommendations/armenia${armenia[0]}`}>
                  Learn More
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
                Map of Azerbaijan
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
                <a href={`/recommendations/azerbaijan${azerbaijan[0]}`}>
                  Learn More
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
