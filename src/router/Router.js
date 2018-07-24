import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Home from '../components/Home/Home'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Publications from '../components/Publications/Publications'
import Recommandations from '../components/Recommandations/Recommandations'
import Country from '../components/Country/Country'

import classes from './Router.css'
class Router extends Component {
  render() {
    return (
      <div >
        <header>
          <nav>
            <NavLink to="/home"> Home</NavLink>
            <NavLink to="/about"> About</NavLink>
            <NavLink to="/contact"> Contact</NavLink>
            <NavLink to="/publications"> Publications</NavLink>
            <Recommandations className={classes.a1} />
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/publications" component={Publications} />
          <Route path="/recommandations/:country" component={Country} />
        </Switch>
      </div>
    );
  }
}

export default Router;