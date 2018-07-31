import React from 'react';
import CardView from '../CardView/CardView';
import classes from '../CardView/CardView.css';

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
        <CardView
          headline={'For Armenia'}
          body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
          link={`/recommendations/armenia${armenia[0]}`}
        />
      </ul>
    );
  case 'azerbaijan':
    return (
      <ul className={classes.flexcontainer}>
        <CardView
          headline={'For Azerbaijan'}
          body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
          link={`/recommendations/azerbaijan${azerbaijan[0]}`}
        />
      </ul>
    );

  case 'georgia':
    return (
      <ul className={classes.flexcontainer}>
        <CardView
          headline={'For Georgia'}
          body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
          link={`/recommendations/georgia${georgia[0]}`}
        />
      </ul>
    );

  case 'turkey':
    return (
      <ul className={classes.flexcontainer}>
        <CardView
          headline={'For Turkey'}
          body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
          link={`/recommendations/turkey${turkey[0]}`}
        />
      </ul>
    );

  case 'russia':
    return (
      <ul className={classes.flexcontainer}>
        <CardView
          headline={'For Russia'}
          body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
          link={`/recommendations/russia${russia[0]}`}
        />
      </ul>
    );

  case 'iran':
    return (
      <ul className={classes.flexcontainer}>
        <CardView
          headline={'For Iran'}
          body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
          link={`/recommendations/iran${iran[0]}`}
        />
      </ul>
    );

  case 'unitedStates':
    return (
      <ul className={classes.flexcontainer}>
        <CardView
          headline={'For United States'}
          body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
          link={`/recommendations/unitedStates${unitedStates[0]}`}
        />
      </ul>
    );

  case 'china':
    return (
      <ul className={classes.flexcontainer}>
        <CardView
          headline={'For China'}
          body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
          link={`/recommendations/china${china[0]}`}
        />
      </ul>
    );

  case 'kurdistan':
    return (
      <ul className={classes.flexcontainer}>
        <CardView
          headline={'For Kurdistan'}
          body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
          link={`/recommendations/kurdistan${kurdistan[0]}`}
        />
      </ul>
    );

  case 'europeanUnion':
    return (
      <ul className={classes.flexcontainer}>
        <CardView
          headline={'For European Union'}
          body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
          link={`/recommendations/europeanUnion${europeanUnion[0]}`}
        />
      </ul>
    );

  case 'other':
    return (
      <ul className={classes.flexcontainer}>
        <CardView
          headline={'For Other'}
          body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
          link={`/recommendations/other${other[0]}`}
        />
      </ul>
    );
  default: return (
    <p>No such Country</p>
  );
  }
};

export default Country;
