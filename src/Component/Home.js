import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import Shoes from './Shoes';
import AboutUs from './AboutUs';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Home(){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <img src="/images/nike2.jpg" alt="nike as pic"></img>
        </Grid>
        <Grid item xs={12} sm={6}>
        <img class="image2" src="/images/nike4.jpg" alt="nike as pic"></img>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <div>
          <h1>
              SOME NEW TRENDS 
          </h1>
          <br />
          <Shoes />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
          <h1>
              ABOUT US 
          </h1>
          <br />
          <br />
          <AboutUs />
      </div>
     
    </div>
  );
}

export default Home;