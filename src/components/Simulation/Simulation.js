import React from 'react';
import CardView from '../CardView/CardView';
import { Helmet } from 'react-helmet';
import '../CardView/CardView.css';
import './Simulation.css';

const Simulation = () => (
  <div>
    <Helmet>
      <title>Group Decision Simulation</title>
      <meta name="description" content="Rational, multiplayer, open-position, group decision Nash like equilibrium simulations."></meta>
      <link rel="canonical" href="https://www.regionalkinetics.com/simulation" />
    </Helmet>
    <div className="container">
      <h1>Group Decision Simulation</h1>
      <p>Rational, multiplayer, open-position, group decision Nash like equilibrium simulations.</p>
    </div>
    <ul className="flexcontainer">
      <CardView
        headline={'Sample Empty Document'}
        body={'Sample Empty Document'}
        link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Sumulations%2FSample.pdf?alt=media&token=feca6ed9-6495-4e68-bcc0-a70a500510e6'}
      />
    </ul>
  </div>
);

export default Simulation;
