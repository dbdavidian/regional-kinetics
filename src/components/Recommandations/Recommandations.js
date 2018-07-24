import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom'
import classes from './Recommandations.css'
class Recommandations extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div style={{ flex: '1' }}>
        <Button
          style={{
            color: 'white',
            textAlign: 'center',
            textTransform: 'none',
            fontSize: '1em',
            fontWeight: '200',
          }}
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Recommandations
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <div className={classes.a1}>
            <NavLink onClick={this.handleClose} to="/recommandations/armenia" style={{ padding: '14px 25px' }}>Armenia</NavLink>
            <NavLink onClick={this.handleClose} to="/recommandations/azerbaijan" style={{ padding: '14px 25px' }}>Azerbaijan</NavLink>
            {/* in order to add new country in dropdown add For example Turkey:
        <NavLink  onClick={this.handleClose}   to="/recommandations/turkey" style = {{padding:'14px 25px'}}>Turkey</NavLink>
        */}
          </div>
        </Menu>
      </div>
    );
  }
}

export default Recommandations;