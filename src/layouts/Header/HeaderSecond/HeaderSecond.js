import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../../assets/images/logo.png'
import { Container, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { LocalMall } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "0px 0px 0px 0px",
    height: 'auto !important',
    margin: '0'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HeaderSecond() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.header}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <Grid container>
              <Grid item xs={3} >
                <div className="header__logo">
                  <NavLink to="/">
                    <img src={logo} alt="hi" />
                  </NavLink>
                </div>
              </Grid>
              <Grid item xs={6} >
                <nav className="header__menu mobile-menu">
                  <ul>
                    <li ><NavLink to="/">Home</NavLink></li>
                    <li ><NavLink to="/shop">Shop</NavLink></li>
                    <li ><NavLink to="/contact_us">Contacts</NavLink></li>
                  </ul>
                </nav>
              </Grid>
              <Grid item xs={3} >
                <div className="header__nav__option">
                  <NavLink className="text-black" to="/checkout"><LocalMall />
                  <p className="price">$0.00</p>
                  
                  </NavLink> 
                
                </div>

          </Grid>
            </Grid>
          </Toolbar>
        </Container>


      </AppBar>
    </div>
  );
}
