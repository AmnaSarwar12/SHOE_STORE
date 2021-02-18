import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {  Link } from 'react-router-dom';
import Home from './Home';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

 function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" class="appbar">
        <Toolbar>
          <img src="/images/nike1.png" alt="nike logo" class="image1"></img>
          <Typography variant="h6" className={classes.title}>
            NIKE
          </Typography>
                <Link class ="link1" to="/" class="text" >
                    About Us
                </Link>
                
                <Link class ="link1" to="Product" class="text">
                    InStock
                </Link>

                <Link class ="link1" to="" class="text">
                    Contact Us
                </Link>

                <Link class ="link1" to=":productkey" class="text">
                    CART
                </Link>
        </Toolbar>
      </AppBar>
      <br />
      <div>
          <Home />
      </div>
    </div>
    
  );
}

export default Header;