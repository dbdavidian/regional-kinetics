import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Recommendations.css';

class Recommendations extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Helmet>
          <title>Recommendations</title>
        </Helmet>
        <div
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          tabIndex={0}
          role="button"
          onClick={this.handleClick}
        >
          Recommendations
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={this.handleClose}
        >
          <div className="listItems">
            <NavLink onClick={this.handleClose} to="/recommendations/armenia">Armenia</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/azerbaijan">Azerbaijan</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/georgia">Gerogia</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/turkey">Turkey</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/russia">Russia</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/iran">Iran</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/unitedStates">United State</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/china">China</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/kurdistan">Kurdistan</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/europeanUnion">European Union</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/other">Other</NavLink>

            {/* In order to add new country in dropdown add it here.*/}
          </div>
        </Menu>
      </div>
    );
  }
}

export default Recommendations;
