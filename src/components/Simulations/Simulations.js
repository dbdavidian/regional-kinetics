import React from 'react';
import CardView from '../CardView/CardView';
import { Helmet } from 'react-helmet';
import '../CardView/CardView.css';
import './Simulations.css';

const Simulations = () => (
  <div>
    <Helmet>
      <title>Group Decision Simulations</title>
      <meta name="description" content="Rational, multiplayer, open-position, group decision equilibrium simulations."></meta>
      <link rel="canonical" href="https://www.regionalkinetics.com/simulations" />
    </Helmet>
    <div className="container">
      <h1>Group Decision Simulations</h1>
      <p>Rational, multiplayer, open-position, group decision simulations.</p>
    </div>
    <ul className="flexcontainer">
      <CardView
        headline={'Negotiation Simulation Rational Decision Model Used by Regional Kinetics'}
        body={'Methodology Brief'}
        link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Sumulations%2FNegotiation_Simulation_Rational_Decision_Model_Used_by_Regional_Kinetics.pdf?alt=media&token=ad4fe3be-449e-4185-916e-071e556e97ff'}
      />
    </ul>
  </div>
);

export default Simulations;
