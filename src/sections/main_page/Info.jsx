import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TelegramIcon from '@material-ui/icons/Telegram';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useEthers, shortenAddress } from '@usedapp/core';


import rotating_logic from "../../images/logos/MAIB BOTS.gif";


const useStyles = makeStyles((theme) => {
    return {
      container: {
        backgroundColor: "rgb(11,1,40)",
        padding: theme.spacing(4, 8, 6),
      },
      whiteText: {
        color: "#ffffff"
      },
      goldText: {
        color: "#ffe699"
      },
      greyText: {
        color: "#a6a6a6"
      },
      greenText: {
        color: "#50C878"
      },
      redText: {
        color: "#FF0000"
      },
      purpleText: {
        color: "rgb(164, 168, 255)"
      },
      secondaryText: {
        color: "rgb(164, 158, 189)"
      },

      logo: {
        width: "30rem",
        maxWidth: '100%',
        maxHeight: 'auto',
      },

      // new colours
      blueTextGlow: {
        color: "rgb(182, 200, 247)",
        textShadow: '0 0 100rem rgba(63, 81, 181, 0.8)',
      },

      blueTextGlowUnderline: {
        position: 'relative',
        display: 'inline-block',
        color: "rgb(220, 160, 240)",
        textShadow: '0 0 100rem rgba(220, 160, 240, 0.8)',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-3px', /* Adjust the distance of the underline */
          left: 0,
          width: '100%',
          borderBottom: '5px solid rgb(182, 200, 247)', /* Set your preferred underline color */
          transform: 'scaleX(1)', /* Ensure the underline is visible */
          transition: 'transform 0.3s ease-in-out',
        },
      },

      purpleTextGlowUnderline: {
        position: 'relative',
        display: 'inline-block',
        color: "rgb(220, 160, 240)",
        textShadow: '0 0 100rem rgba(220, 160, 240, 0.8)',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-3px', /* Adjust the distance of the underline */
          left: 0,
          width: '100%',
          borderBottom: '5px solid rgb(220, 160, 240)', /* Set your preferred underline color */
          transform: 'scaleX(1)', /* Ensure the underline is visible */
          transition: 'transform 0.3s ease-in-out',
        },
      },

      card: {
        padding: theme.spacing(7, 8, 7),
        backgroundColor: "rgb(50,50,50)"
      },

      buttonStyle: {
        margin: '10px',
        padding: '15px 30px',
        textAlign: 'center',
        textTransform: 'uppercase',
        transition: '0.5s',
        backgroundSize: '200% auto',
        color: 'white',
        borderRadius: '10px',
        display: 'block',
        border: '0px',
        fontWeight: '700',
        boxShadow: '0px 0px 14px -7px #f09819',
        backgroundImage: "linear-gradient(144deg,#00DDEB, #5B42F3 50%, #AF40FF)",
        cursor: 'pointer',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'manipulation',
        '&:hover': {
          backgroundPosition: 'right center',
          /* change the direction of the change here */
          color: '#fff',
          textDecoration: 'none',
        },
        '&:active': {
          transform: 'scale(0.95)',
        },
      },
      
    }
});

function Info() {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
          <Grid container spacing={1} direction="column" alignItems='center'>
            <Grid container item >
              <Grid container direction='column' justifyContent="center" alignItems='center' alignContent='center'>
                  <Grid item>
                      <Typography className={ classes.blueTextGlow } variant='h2' align='center'>
                          <strong>WEB2 <Typography className={classes.purpleTextGlowUnderline} variant='h2' display='inline'><strong>AI</strong></Typography> BOTS POWERED BY WEB3</strong> 
                      </Typography>
                  </Grid>
                  {/* <Grid item>
                    <Button className={classes.buttonStyle}>PRE-SALE LIVE NOW</Button>
                  </Grid>     */}
              </Grid>
            </Grid>

            <Grid xs={12} item justifyContent="center" alignItems='center' alignContent='center'>
              <img src={rotating_logic} alt="Logo" className={ classes.logo }/>
            </Grid>


          </Grid>
        </div>    
    );
  }
  
export default Info;

