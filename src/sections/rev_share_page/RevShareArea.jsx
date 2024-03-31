import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';


import Snackbars from '../../components/Snackbars';


import { constants, utils, BigNumber } from "ethers";
import { useEthers, useTokenBalance } from '@usedapp/core';

import { rev_share_address, maib_address } from "../../constants/contracts";
import { useRegister, useClaimRevenue, useClaimableAmounts, useTotalRevenue, useTotalWeeklyRevenue, useIsRegistered } from '../../hooks/revShareHooks.jsx'




const useStyles = makeStyles((theme) => {
    return {
      container: {
        background: "linear-gradient(to bottom right, rgb(35,23,58), rgb(32,12,122))",
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
        // textShadow: '0 0 100rem rgba(63, 81, 181, 0.8)',
      },

      purpleTextGlow: {

        color: "rgb(220, 160, 240)",
        // textShadow: '0 0 100rem rgba(220, 160, 240, 0.8)',
        
      },

      textMt: {
        marginTop: "0.7rem"
      },

      card: {
        backgroundColor: "rgba(21, 19, 50, 0.6)"
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
        // display: 'block',
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

      textField: {
        borderColor: '#ffffff !important'
      },
      notchedOutline: {
        borderColor: "rgb(220, 160, 240) !important",
      },
      textFieldColorRef: {
        color: "#ffffff !important",
        fontWeight: "bold",
        fontSize:"1rem",
      },

      BoxesMarginT: {
        marginTop: "3rem"
      },

      boxCard: {
        padding: theme.spacing(2, 3, 2),
        // minWidth: "12rem",
        backgroundColor: "#151332"
      },

    }
});

function RevShareArea() {
    const classes = useStyles();

    const { account } = useEthers();

    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");

    const tokenBalance = useTokenBalance(maib_address, account);
    const isRegistered = useIsRegistered();

    const claimableAmount = useClaimableAmounts();
    const totalRevenue = useTotalRevenue();
    const totalWeeklyRevenue = useTotalWeeklyRevenue();

    // register for rev share
    const { state: registerState, send: register, events: registerEvents, resetState: resetRegister } = useRegister();
    function handleRegister(){        
        register().catch(err => {
            setOpen(true);
            setSeverity("warning");
        })
    }

    useEffect(() => {
        if (registerState.status === "Success") {
            setOpen(true);
            setSeverity("success");
        }
        else if (registerState.status === "Mining") {
            setOpen(true);
            setSeverity("info");
        }
        else if (registerState.status === "Fail") {
            setOpen(true);
            setSeverity("error");
        }
        
    }, [registerState]);


    // claim rev share
    const { state: claimRevenueState, send: claimRevenue, events: claimRevenueEvents, resetState: resetClaimRevenue } = useClaimRevenue();
    function handleClaimRevenue(){        
        claimRevenue().catch(err => {
            setOpen(true);
            setSeverity("warning");
        })
    }

    useEffect(() => {
        if (claimRevenueState.status === "Success") {
            setOpen(true);
            setSeverity("success");
        }
        else if (claimRevenueState.status === "Mining") {
            setOpen(true);
            setSeverity("info");
        }
        else if (claimRevenueState.status === "Fail") {
            setOpen(true);
            setSeverity("error");
        }
        
    }, [claimRevenueState]);

    return (
        <div className={ classes.container }>
            

          <Grid container spacing={1} direction="column" justifyContent='center'>
          <Snackbars open={open} setOpen={setOpen} severity={severity}/>
              
              <Grid container item className={classes.BoxesMarginT}>
                  
                  <Grid container direction='row' justifyContent='space-evenly' spacing={2}>

                      <Grid item className={ classes.boxCard } xs={7} md={4}>
                          <Box display="flex" flexDirection="column">
                              <Typography className={ classes.purpleTextGlow } variant='h6' align='center'>
                                  <strong>Total Revenue Distributed</strong> 
                              </Typography>
                              <Box mt={2}></Box>
                              <Typography className={ classes.whiteText } variant='h6' align='center'>
                                  <strong>{totalRevenue ? parseFloat(utils.formatEther(totalRevenue)).toFixed() : "0"} $MAIB</strong>
                              </Typography>
                          </Box>
                      </Grid>

                      <Grid item className={ classes.boxCard } xs={7} md={4}>
                          <Box display="flex" flexDirection="column">
                              <Typography className={ classes.purpleTextGlow } variant='h6' align='center'>
                                  <strong>Total Weekly Revenue</strong> 
                              </Typography>
                              <Box mt={2}></Box>
                              <Typography className={ classes.whiteText } variant='h6' align='center'>
                                  <strong>{totalWeeklyRevenue ? parseFloat(utils.formatEther(totalWeeklyRevenue)).toFixed() : "0"} $MAIB</strong>
                              </Typography>
                          </Box>
                      </Grid>

                  </Grid>
              </Grid>


              <Grid container item className={classes.BoxesMarginT}>
                  <Grid container direction='column' justifyContent='center' alignItems='center' spacing={1}>
                      
                      {!isRegistered && 
                        <Grid item>
                          <Typography className={classes.whiteText} variant='h6' align='center'>
                            <strong>Please begin by registering for revenue share</strong> 
                          </Typography>
                          <Typography className={classes.secondaryText} variant='body1' align='center'>
                            <strong>You must hold at least 1000 $MAIB tokens to register - there is no fee to register</strong> 
                          </Typography>
                        </Grid>
                      }

                      {!isRegistered &&
                      <Grid item>
                        <Button className={classes.buttonStyle} onClick={() => handleRegister()}>Register</Button>
                      </Grid>
                      }
                      
                      

                      {isRegistered && <Grid item>
                        <Card className={classes.card}>
                          <CardHeader
                            title=<Typography className={classes.blueTextGlow} variant='h5'>
                              <strong>MY REVENUE SHARE REWARDS</strong> 
                          </Typography>
                          />
                          <CardContent>
                            <Typography className={classes.purpleTextGlow} variant='h6'>
                              <strong>MY $MAIB BALANCE: <Typography className={classes.whiteText} display='inline' variant='h6'><strong>{tokenBalance ? parseFloat(utils.formatEther(tokenBalance)).toFixed() : "0"}</strong></Typography></strong> 
                            </Typography>
                            <Typography className={classes.purpleTextGlow} variant='h6'>
                              <strong>MY $MAIB REWARDS: <Typography className={classes.whiteText} display='inline' variant='h6'><strong>{claimableAmount ? parseFloat(utils.formatEther(claimableAmount)).toFixed(2) : "0"}</strong></Typography></strong> 
                            </Typography>

                            <Box display='flex' flexDirection='column' mt={4}>
                              <Button className={classes.buttonStyle} onClick={() => handleClaimRevenue()}>CLAIM REWARDS</Button>
                            </Box>

                          </CardContent>

                        </Card>
                      </Grid>}

                      {isRegistered && <Grid item className={classes.BoxesMarginT}>
                        <Typography className={classes.blueTextGlow} variant='h4' align='center'>
                          <strong>NEXT REWARDS UPDATE: APRIL 7</strong> 
                        </Typography>
                        <Typography className={classes.secondaryText} variant='body1' align='center'>
                          <strong>REWARDS ARE UPDATED ONCE A WEEK, AND AUTO-COMPOUND.</strong> 
                        </Typography>
                      </Grid>}
                      

                     

                  </Grid>
              </Grid>  



          </Grid>
        </div>    
    );
  }
  
export default RevShareArea;