import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
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

            {/* in order to add new country in dropdown add For example Turkey:
            <NavLink  onClick={this.handleClose}   to="/recommendations/turkey" style = {{padding:'14px 25px'}}>Turkey</NavLink>
            */}
          </div>
        </Menu>
      </div>
    );
  }
}

export default Recommendations;
