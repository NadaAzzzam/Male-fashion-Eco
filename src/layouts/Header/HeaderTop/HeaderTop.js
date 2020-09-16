import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Container,
  Button,
  Divider
} from "@material-ui/core";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#111111",
    color: "white",
    boxShadow: "0px 0px 0px 0px",
    height: 'auto !important',
    margin: '0'
  },
  toolbar: {
    minHeight: 'auto !important',
  },
  title: {
    flexGrow: 1,
    color: 'white',

  },
});

export default function HeaderTop() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <AppBar position="sticky" className={classes.header}>
        <Container>
          <Toolbar className={classes.toolbar}>
            {/* <IconButton aria-label="app" color="inherit">
            <Menu />
          </IconButton> */}
            <p className={classes.title}> Free shipping, 30-day return or refund guarantee. </p>
            <Button component={NavLink} to="/sign_in" color="inherit">Sign in</Button>
            <Divider style={{ backgroundColor: '#ffffff40' }} orientation="vertical" flexItem />
            <Button component={NavLink} to="/sign_up" color="inherit">Sign Up</Button>


          </Toolbar>

        </Container>

      </AppBar>
    </div>



  );
}
