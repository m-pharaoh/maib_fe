import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useEthers, shortenAddress } from '@usedapp/core';


import Logo from "../../images/logos/MAIB2.png";


const useStyles = makeStyles((theme) => {
    return {
        appBar: {
            background: "linear-gradient(to top, rgb(35,23,58), rgb(32,12,122))",
            boxShadow: "None",
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            paddingLeft: theme.spacing(10),
            paddingRight: theme.spacing(10)
        },
        logo: {
          width: '110%',
          display: 'block',
          margin: '0 auto',
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
          backgroundImage: "linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)",
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

function Navbar() {
    const classes = useStyles();

    return (
        <div >
          <AppBar className={ classes.appBar } position="relative">
            <Toolbar>
              <Grid container alignItems="center" justifyContent="center">
                {/* Logo on the very left */}
                <Grid item lg={3} justifyContent="center" alignItems='center' alignContent='center'>
                  <img src={Logo} alt="Logo" className={classes.logo} />
                </Grid>

                {/* Group of text buttons in the middle */}
                <Grid item lg={6} container justifyContent="center">
                  <Button className={classes.buttonStyle}>documentation</Button>
                  <Button className={classes.buttonStyle}>PRE-SALE</Button>
                  <Button className={classes.buttonStyle} href='/revshare'>REVENUE SHARE</Button>
                </Grid>

                {/* Large button on the very right */}
                <Grid item lg={3} container justifyContent="center">
                  <Button className={classes.buttonStyle}>LAUNCH META AI BOTS</Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>    
    );
  }
  
export default Navbar;

