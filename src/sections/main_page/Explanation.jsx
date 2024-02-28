import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';


import Logo from "../../images/logos/MAIB-no-bg.png";



const useStyles = makeStyles((theme) => {
    return {
      container: {
        background: "linear-gradient(to bottom left, rgb(35,23,58), rgb(32,12,122))",
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
      blueText: {
        color: "#6febeb"
      },
      greenText: {
        color: "#50C878"
      },

      secondaryText: {
        color: "#AAAAAA"
      },

      wheatText: {
        color: "#F5DEB3"
      },

      blueTextGlow: {
        color: "rgb(182, 200, 247)",
        textShadow: '0 0 50px rgba(63, 81, 181, 0.8)',
      },

      purpleTextGlow: {
        position: 'relative',
        display: 'inline-block',
        color: "rgb(220, 160, 240)",
        textShadow: '0 0 50px rgba(220, 160, 240, 0.8)',
        
      },

      bouncingImage: {
        width: "25rem",
        maxWidth: '100%',
        maxHeight: 'auto',
        animation: '$bounce 2s infinite',
      },
      '@keyframes bounce': {
        '0%, 100%': {
          transform: 'translateY(0)',
        },
        '50%': {
          transform: 'translateY(-10px)',
        },
      },

      textMt: {
        marginTop: "0.7rem"
      }

    }
});

function Explanation() {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            <Grid container spacing={5} direction="row" justifyContent='space-between'>
              <Grid item xs={12} md={6}>
                <Typography className={classes.blueTextGlow} variant='h4'>
                    <strong><Typography className={classes.blueTextGlow} display='inline' variant='h4'><strong>META</strong></Typography>  <Typography className={classes.purpleTextGlow} display='inline' variant='h4'><strong>AI</strong></Typography> <Typography className={classes.blueTextGlow} display='inline' variant='h4'><strong>BOTS</strong></Typography>: Bridging WEB2 to WEB3 with Intelligent Bots</strong> 
                </Typography>
                <Typography className={`${classes.whiteText} ${classes.textMt}`} variant='h6'>
                META AI BOTS redefine the landscape of WEB2 applications. These bots, meticulously designed and powered by our revenue-share token <Typography className={classes.blueTextGlow} display='inline' variant='h6'><strong>$MAIB</strong></Typography>, seamlessly integrate into the fabric of widely-used WEB2 platforms. Their primary mission? To pioneer the onboarding of 4.5 billion users from WEB2 to WEB3, elevating user experiences by autonomously handling everyday tasks, introducing innovative WEB3 functionalities, and intuitively guiding users toward the realm of decentralized networks. As these bots efficiently manage and enhance WEB2 interactions, they simultaneously introduce and incentivize users with our token, igniting their curiosity and engagement with the infinite possibilities of the WEB3 landscape.
                </Typography>

              </Grid>
              <Grid item xs={12} md={5}>
                <Box
                    display="flex"
                    className={classes.bouncingImage}
                    component="img"
                    alt="logo"
                    src={Logo} 
                />
              </Grid>
                
            </Grid>
        </div>    
    );
  }
  
export default Explanation;