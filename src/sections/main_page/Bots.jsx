import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


import mailLogo from "../../images/logos/GMAIL_LOGO.png";
import unknownLogo from "../../images/logos/unknown.png";




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

      blueTextDarkGlow: {
        color: "#8499cf",
        textShadow: '0 0 50px rgba(63, 81, 181, 0.8)',
      },

      purpleTextGlow: {
        // position: 'relative',
        // display: 'inline-block',
        color: "rgb(220, 160, 240)",
        textShadow: '0 0 50px rgba(220, 160, 240, 0.8)',
        
      },

      textMt: {
        marginTop: "0.7rem"
      },

      BoxesMarginT: {
        marginTop: "1.5rem"
      },

      card: {
        // display: 'flex',
        // aspectRatio: '2 / 1',
        // minWidth: "20rem",
        // minHeight: "18rem",
        marginTop: "3rem",
        // background: "linear-gradient(282.66deg, rgba(42, 179, 255, 0.19) -6.68%, rgba(117, 32, 255, 0.19) 51.39%, rgba(255, 66, 179, 0.19) 106.96%), linear-gradient(0deg, #151332 0%, rgba(21, 19, 50, 0) 100%), #151332",
        backgroundColor: "#151332"
      },

      avatar: {
        minWidth: "6rem",
        minHeight: "6rem",
      },

      subheaderWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: theme.spacing(1), // Adjust margin top as needed
      },

      pillContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '30px', /* Adjust border-radius to make it more pill-shaped */
        background: 'rgb(11,1,40)',
        // width: 'fit-content', /* Adjust width as needed */
        padding: '0.2rem 1.3rem', /* Adjust padding for inner space */
        // marginTop: "3rem",
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


      // COMING SOON CARD
      cardComingSoon: {
        position: 'relative',

        // minWidth: "20rem",
        minHeight: "31rem",

        marginTop: "3rem",
        // background: "linear-gradient(282.66deg, rgba(42, 179, 255, 0.19) -6.68%, rgba(117, 32, 255, 0.19) 51.39%, rgba(255, 66, 179, 0.19) 106.96%), linear-gradient(0deg, #151332 0%, rgba(21, 19, 50, 0) 100%), #151332",
        backgroundColor: "#151332"
      },
      overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(21, 19, 50, 0.8)', // Adjust opacity as needed
      },
      overlayText: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#ffffff', // Text color
      },
      

    }
});

function Bots() {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            <Grid container spacing={1} direction="column" alignItems='center'>
               <Grid container item >
                    <Grid container alignItems='center' direction='column'>
                        <Grid item>
                            <Typography className={classes.blueTextGlow} variant='h3'>
                                <strong>META AI BOTS</strong> 
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.purpleTextGlow} variant='h6' display='block'>
                                <strong>META AI BOTS ARE POWERED BY OUR PRIVATE LLMs - ENSURING: PRIVACY, SECURITY, AND OPTIMAL PERFORMANCE.</strong> 
                            </Typography>
                        </Grid>
                        
                    </Grid>
                </Grid>

                <Grid container item>
                    <Grid container justifyContent='space-around'>
                      <Grid item md={3}>
                        <Card className={classes.card}>
                            <CardHeader
                                subheader={
                                  <div className={classes.subheaderWrapper}>
                                    <div className={classes.pillContainer}>
                                      <Typography variant="subtitle1" className={classes.purpleTextGlow} align='center'>
                                        <strong>BETA</strong> 
                                      </Typography>
                                    </div>
                                  </div>
                                }
                                
                                avatar={
                                <Avatar src={mailLogo} className={classes.avatar}/>
                                }
                                title={
                                  <div className={classes.BoxesMarginT}>
                                    <Typography variant="h5" className={classes.blueTextGlow} align='center'>
                                      <strong>EMAIL AI BOT</strong> 
                                  
                                    </Typography>
                                  </div>
                                
                                }

                                
                            />

                            <CardContent>
                                <Grid container direction='column' spacing={2} justifyContent='center' alignItems='center'>

                                  <Grid item >
                                      <Typography variant="body1" className={classes.whiteText} >
                                        <Typography className={classes.blueTextGlow} display='inline' variant='body1'><strong>MISSION: </strong></Typography>
                                        <strong>Empowering over 1.8 billion users, the EMAIL AI BOT seamlessly integrates with your Gmail inbox, granting users the unparalleled ability to compose, send, and manage emails elevated by the capabilities of AI technology.</strong> 
                                      </Typography>
                                  </Grid>

                                  <Grid item>
                                      <Typography variant="body1" className={classes.whiteText} >
                                        <Typography className={classes.blueTextGlow} display='inline' variant='body1'><strong>ACCESS: </strong></Typography>
                                        <strong>AT LEAST 75,000 $MAIB TOKENS IN WALLET</strong> 
                                      </Typography>
                                  </Grid>

                                  <Grid item justifyContent='center' alignItems='center' alignContent='center'>
                                    <Button className={classes.buttonStyle} href='https://t.me/meta_ai_web3_bot' target='_blank'>LAUNCH EMAIL AI BOT</Button>
                                    
                                  </Grid>

                                  

                                  

                                </Grid>
                                <Grid container justifyContent='center' alignItems='center' alignContent='center'>
                                  <Grid item direction='row' justifyContent='center' alignItems='center' alignContent='center'>
                                      <Button variant="outlined" className={classes.buttonStyle} href='https://youtu.be/lHq7M7TvI5c' target='_blank'>DEMO VIDEO</Button>
                                  </Grid>

                                </Grid>
                                
                            </CardContent>
                        </Card>
                      </Grid>


                      <Grid item md={3}>
                        <Card className={classes.cardComingSoon}>
                            <CardHeader
                              
                                avatar={
                                <Avatar src={unknownLogo} className={classes.avatar}/>
                                }
                                title={
                                  <div className={classes.BoxesMarginT}>
                                    <Typography variant="h5" className={classes.blueTextGlow} align='center'>
                                      <strong>??? AI BOT</strong> 
                                  
                                    </Typography>
                                  </div>
                                
                                }

                                
                            />

                            <CardContent>
                                <Grid container direction='column' spacing={2} justifyContent='center' alignItems='center'>

                                 

                                </Grid>
                            </CardContent>

                            <div className={classes.overlay}>
                              <Typography variant="h6" className={classes.overlayText}>
                                COMING SOON
                              </Typography>
                            </div>
                        </Card>
                      </Grid>

                      <Grid item md={3}>
                        <Card className={classes.cardComingSoon}>
                            <CardHeader
                              
                                avatar={
                                <Avatar src={unknownLogo} className={classes.avatar}/>
                                }
                                title={
                                  <div className={classes.BoxesMarginT}>
                                    <Typography variant="h5" className={classes.blueTextGlow} align='center'>
                                      <strong>??? AI BOT</strong> 
                                  
                                    </Typography>
                                  </div>
                                
                                }

                                
                            />

                            <CardContent>
                                <Grid container direction='column' spacing={2} justifyContent='center' alignItems='center'>

                                 

                                </Grid>
                            </CardContent>

                            <div className={classes.overlay}>
                              <Typography variant="h6" className={classes.overlayText}>
                                COMING SOON
                              </Typography>
                            </div>
                        </Card>
                      </Grid>

                      

                      
                    </Grid>
                </Grid>
            </Grid>
        </div>    
    );
  }
  
export default Bots;