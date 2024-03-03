import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from '@material-ui/core';


const useStyles = makeStyles((theme) => {
    return {
      container: {
            backgroundColor: "rgb(11,1,40)",
          padding: theme.spacing(4, 8, 6),
          color: "#a6a6a6"
      },
      topM: {
        marginTop: "1.5rem"
      },
      iconButton: {
        color: '#9c27b0', // Light purple color
        '& svg': {
          fontSize: "3rem"
        }
      },

      blueTextGlow: {
        color: "rgb(182, 200, 247)",
        textShadow: '0 0 50px rgba(63, 81, 181, 0.8)',
        textDecoration: 'none'
      },
    }
});

function Disclaimer() {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            <Grid container spacing={1} direction="row" justifyContent="center" alignItems="flex-start">
                <Typography variant='body2'>Disclaimer: META AI BOTS is an independent entity and is not affiliated with, endorsed by, or connected to Meta Platforms, its subsidiaries, or any of its products or services mentioned on this website. Any references to Meta, including the term 'Meta,' are used for descriptive purposes only. Any trademarks, logos, or brand names used here are the property of their respective owners.</Typography>
            </Grid>
            <Grid container className={ classes.topM } spacing={1} direction="row" justifyContent="center" alignItems="flex-start">
              <Grid item>
                <IconButton
                  className={classes.iconButton}
                  aria-label="telegram"
                  component="a"
                  href="https://t.me/+krkR_k1X2admMWYx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TelegramIcon />
                </IconButton>

              </Grid>
              <Grid item>
                <IconButton
                  className={classes.iconButton}
                  aria-label="twitter"
                  component="a"
                  href="https://twitter.com/metaaibots"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </IconButton>

              </Grid>
              
              
            </Grid>
            <Grid container spacing={1} direction="row" justifyContent="center" alignItems="flex-start">
              <Grid item>
                <Typography className={ classes.blueTextGlow } component='a' href='https://bscscan.com/address/0xC218EF3Cc52D5D93b0eDEcf30Cdc2a98804cfeC5' target='_blank' rel="noopener noreferrer">0xC218EF3Cc52D5D93b0eDEcf30Cdc2a98804cfeC5</Typography>
                
              </Grid>
              
              
            </Grid>
        </div>    
    );
  }
  
export default Disclaimer;