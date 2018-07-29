import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Home from '../components/Home/Home';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Publications from '../components/Publications/Publications';
import Recommendations from '../components/Recommendations/Recommendations';
import Country from '../components/Country/Country';

import classes from './Router.css';

function Router() {
  return (
    <div>
      <header>
        <div className={classes.logoHeaderDiv}>
          <img className={classes.logo} src="logo.png" alt="Logo" />
          <h1 className={classes.header}>Regional Kinetics</h1>
        </div>
        <nav>
          <NavLink to="/home">
              Home
          </NavLink>
          <NavLink to="/publications">
              Significant Publications
          </NavLink>
          <NavLink to="/contact">
              Contact
          </NavLink>
          <NavLink to="/about">
              About
          </NavLink>
          <a>
            <Recommendations />
          </a>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/publications" component={Publications} />
        <Route path="/recommendations/:country" component={Country} />
      </Switch>
    </div>
  );
}

export default Router;
