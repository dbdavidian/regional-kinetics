import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';
import classes from './Recommendations.css';

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
          <div className={classes.a1}>
            <NavLink onClick={this.handleClose} to="/recommendations/armenia" style={{ padding: '14px 25px' }}>Armenia</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/azerbaijan" style={{ padding: '14px 25px' }}>Azerbaijan</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/georgia" style={{ padding: '14px 25px' }}>Gerogia</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/turkey" style={{ padding: '14px 25px' }}>Turkey</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/russia" style={{ padding: '14px 25px' }}>Russia</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/iran" style={{ padding: '14px 25px' }}>Iran</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/unitedStates" style={{ padding: '14px 25px' }}>United State</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/china" style={{ padding: '14px 25px' }}>China</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/kurdistan" style={{ padding: '14px 25px' }}>Kurdistan</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/europeanUnion" style={{ padding: '14px 25px' }}>European Union</NavLink>
            <NavLink onClick={this.handleClose} to="/recommendations/other" style={{ padding: '14px 25px' }}>Other</NavLink>

            {/* In order to add new country in dropdown add it here.*/}
          </div>
        </Menu>
      </div>
    );
  }
}

export default Recommendations;
