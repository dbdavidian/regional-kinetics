import React from 'react';
import CardView from '../CardView/CardView';
import classes from '../CardView/CardView.css';

const importAll = r => r.keys().map(r);

const pdfs = importAll(require.context('../../../public/publications', false, /\.(pdf)$/));

const Publications = () => (
  <ul className={classes.flexcontainer}>
    <CardView
      headline={'Oligarchies and Strategic Danger to Small State Security'}
      body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
      link={`/publications${pdfs[0]}`}
    />

    <CardView
      headline={'Returns on Diplomatic Investment Zionist Policies and the Armenians'}
      body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
      link={`/publications${pdfs[1]}`}
    />

    <CardView
      headline={'The Challenge of the Indigenous Arms Industry'}
      body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
      link={`/publications${pdfs[2]}`}
    />

    <CardView
      headline={'The Programmable Diplomatic Kill Switch {random text here for pushing the button down}'}
      body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
      link={`/publications${pdfs[3]}`}
    />

    <CardView
      headline={'Why Azerbaijan is unable to offer viable solutions to the Nagorno-Karabakh Conflict'}
      body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
      link={`/publications${pdfs[4]}`}
    />

    {/* add pdf file in  /public/publications and then here. */}
  </ul>
);

export default Publications;
