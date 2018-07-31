import React from 'react';
import CardView from '../CardView/CardView';
import classes from '../CardView/CardView.css';
import localClasses from './Simulation.css';

const importAll = r => r.keys().map(r);

const armenia = importAll(require.context('../../../public/recommendations/armenia', false, /\.(pdf)$/));

const Simulation = () => (
  <div>
    <div className={localClasses.container}>
      <h1>Group Decision Simulation</h1>
      <p>Nash like equilibrium</p>
      <p>PDF CARDS - This is just a template for now!</p>
    </div>
    <ul className={classes.flexcontainer}>
      <CardView
        headline={'Why Azerbaijan is unable to offer viable solutions to the Nagorno-Karabakh Conflict'}
        body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
        link={`/recommendations/armenia${armenia[0]}`}
      />
    </ul>
  </div>
);

export default Simulation;
