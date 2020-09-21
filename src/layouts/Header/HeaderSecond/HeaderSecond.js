import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../../assets/images/logo.png'
import { Container, Drawer, Grid, IconButton } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import { LocalMall, Menu } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    width: 300,
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
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="header__wrapper">
        <div className="header__wrapper__option">
          <div className="header__wrapper__links">
            <a href="#">Sign in</a>
            <a href="#">Sign Up</a>
          </div>
        </div>
        <div className="header__wrapper__nav-option" >
          <NavLink className=" text-black" to="/checkout"><LocalMall />
            <span >$0.00</span>
          </NavLink>
        </div>
        <div className="header__wrapper__list">
          <nav  >
            <ul>
              <li ><Link to="/home">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link  to="/contact_us">Contacts</Link></li>
            </ul>
          </nav>
        </div>
        <div className="header__wrapper-text">
          <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
        <div className="header__wrapper-social">
         
          <div class="flex-center">
            <i class="fab fa-twitter fa-2x icon-3d"></i>
            <i class="fab fa-facebook-f fa-2x icon-3d"></i>
            <i class="fab fa-instagram fa-2x icon-3d"></i>
            <i class="fab fa-whatsapp fa-2x icon-3d"></i>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.header}>
        <Container>
          <Toolbar className={classes.toolbar}>


            <Grid container>
              <Grid item lg={3} md={3} sm={4} xs={6} >
                <div className="header__logo">
                  <NavLink to="/home">
                    <img src={logo} alt="hi" />
                  </NavLink>
                </div>
              </Grid>
              <Grid className="mobile_menu" item lg={6} md={6} sm={6} xs={6} >
                <nav className="header__menu ">
                  <ul>
                    <li ><NavLink to="/home">Home</NavLink></li>
                    <li ><NavLink to="/shop">Shop</NavLink></li>
                    <li ><NavLink to="/contact_us">Contacts</NavLink></li>
                  </ul>
                </nav>
              </Grid>
              <Grid className="mobile_cart" item lg={3} md={3} sm={2} xs={6} >
                <div className="header__nav__option">
                  <NavLink className="text-black" to="/checkout"><LocalMall />
                    <p className="price">$0.00</p>

                  </NavLink>

                </div>

              </Grid>
              <Grid className="mobile_toggler" item lg={3} md={3} sm={8} xs={6} >
                <div className="header__nav__option">

                  <IconButton onClick={toggleDrawer('left', true)} aria-label="app" edge="end" color="inherit">
                    <Menu />
                  </IconButton>
                  <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                    {list('left')}
                  </Drawer>
                </div>

              </Grid>
            </Grid>
          </Toolbar>
        </Container>


      </AppBar>
    </div>
  );
}
