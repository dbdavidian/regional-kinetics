import React from 'react';
import { Helmet } from 'react-helmet';

import './Home.css';

const Home = () => (
  <div className="container">
    <Helmet>
      <title>Regional Kinetics</title>
      <meta name="description" content="Recommendations for policy makers across the Southern Caucasus and the wider region"></meta>
      <link rel="canonical" href="https://www.regionalkinetics.com/home" />
    </Helmet>
    <h1>Serving Regional Policy Makers</h1>
    <p>Recommendations for policy makers across the Southern Caucasus and the wider region</p>
  </div>
);

export default Home;
