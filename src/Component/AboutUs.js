import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../App.css'

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

function AboutUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
        <Typography variant="h6" className={classes.title}>
                ABOUT NIKE
                Our mission is what drives us to do everything possible to expand human potential. We do that by creating groundbreaking sport innovations, by making our products more sustainably, by building a creative and diverse global team and by making a positive impact in communities where we live and work.

                Based in Beaverton, Oregon, NIKE, Inc. includes the Nike, Converse, and Jordan brands.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img class="image4" src="/images/nike11.jpg" alt="nike shoe"></img>
        </Grid>
       </Grid>
    </div>  
    
  );
}
export default AboutUs;