import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => {
    return {
      container: {
            backgroundColor: "rgb(11,1,40)",
          padding: theme.spacing(4, 8, 6),
          color: "#a6a6a6"
      }
    }
});

function Disclaimer() {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            <Grid container spacing={1} direction="row" justifyContent="center" alignItems="flex-start">
                <Typography variant='body2'>Disclaimer: META AI BOTS is an independent entity and is not affiliated with, endorsed by, or connected to Meta Platforms, its subsidiaries, or any of its products or services mentioned on this website. Any references to Meta, including the term 'Meta,' are used for descriptive purposes only. Any trademarks, logos, or brand names used here are the property of their respective owners.</Typography>
            </Grid>
        </div>    
    );
  }
  
export default Disclaimer;