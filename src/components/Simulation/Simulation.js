import React from 'react';
import CardView from '../CardView/CardView';
import '../CardView/CardView.css';
import './Simulation.css';

const Simulation = () => (
  <div>
    <div className="container">
      <h1>Group Decision Simulation</h1>
      <p>Nash like equilibrium</p>
    </div>
    <ul className="flexcontainer">
      <CardView
        headline={'Sample Empty Document'}
        body={'Sample Empty Document'}
        link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Simulation%2FSample.pdf?alt=media&token=5cd71555-3789-48dc-b872-bd2b61a91c08'}
      />
    </ul>
  </div>
);

export default Simulation;
