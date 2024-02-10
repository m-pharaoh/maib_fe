import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';


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
        textShadow: '0 0 100rem rgba(63, 81, 181, 0.8)',
      },

      blueTextDarkGlow: {
        color: "#8499cf",
        textShadow: '0 0 100rem rgba(63, 81, 181, 0.8)',
      },

      purpleTextGlow: {
        // position: 'relative',
        // display: 'inline-block',
        color: "rgb(220, 160, 240)",
        textShadow: '0 0 100rem rgba(220, 160, 240, 0.8)',
        
      },

      card: {
        backgroundColor: "rgba(21, 19, 50, 0.6)"
      },

      containerMt: {
        marginTop: "3rem"
      }
    }
});

function Reasons() {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            <Grid container spacing={1} direction="column" justifyContent="center" alignItems='center' alignContent='center'>
                <Grid item>
                    <Typography className={classes.purpleTextGlow} variant='h3'>
                        <strong>WHAT MAKES US SPECIAL</strong> 
                    </Typography>
                </Grid>

                <Grid container item className={classes.containerMt}>
                  <Grid container justifyContent='space-between' spacing={5}>
                  

                    <Grid item md={4}>
                      <Card className={classes.card}>
                        <CardHeader
                          title=<Typography className={classes.purpleTextGlow} variant='h5'>
                            <strong>PRIVACY & PERFORMANCE</strong> 
                        </Typography>
                        />
                        <CardContent>
                          <Typography className={classes.whiteText} variant='h6'>
                          We stand out by utilizing our private Large Language Models (LLMs) to supercharge performance without compromising user privacy. Our exclusive use of private LLMs ensures top-tier functionality while maintaining an unwavering commitment to user data privacy. Unlike conventional systems such as ChatGPT, we do not collect any user data for the purposes of training our AI models, guaranteeing a secure and confidential experience at all times. This straightforward approach aligns with our dedication to innovation and user trust.

                          </Typography>
                        </CardContent>

                      </Card>


                    </Grid>

                    <Grid item md={4}>
                      <Card className={classes.card}>
                        <CardHeader
                          title=<Typography className={classes.purpleTextGlow} variant='h5'>
                            <strong>TRUSTED TEAM</strong> 
                        </Typography>
                        />
                        <CardContent>
                          <Typography className={classes.whiteText} variant='h6'>
                          Tired of random anon teams? Our team's journey spans multiple years of dedicated involvement in the DEFI landscape. Our collective expertise has fueled the successful development of multiple DEFI projects (such as the famous BUSD BANK). Through transparent practices and an unwavering commitment to integrity, we've garnered the confidence of our users and established strong relationships with key partners. These alliances stand as testament to our commitment to excellence and innovation, paving the way for a future where trust and collaboration define success in DEFI.

                          </Typography>
                        </CardContent>

                      </Card>


                    </Grid>

                    <Grid item md={4}>
                      <Card className={classes.card}>
                        <CardHeader
                          title=<Typography className={classes.purpleTextGlow} variant='h5'>
                            <strong>COMMUNITY-CENTRIC APPROACH</strong> 
                        </Typography>
                        />
                        <CardContent>
                          <Typography className={classes.whiteText} variant='h6'>
                          When the project thrives, it's our belief that the community supporting it should thrive alongside. That's why at META AI BOTS, our community-centric approach revolves around our unique revenue-sharing token, <Typography className={classes.blueTextGlow} display='inline' variant='h6'><strong>$MAIB</strong></Typography>: providing <Typography className={classes.purpleTextGlow} display='inline' variant='h6'><strong>2%</strong></Typography> of all <Typography className={classes.blueTextGlow} display='inline' variant='h6'><strong>$MAIB</strong></Typography> trading volume to token holders. Not only do we prioritize financial rewards, but we also value community feedback. We actively seek and implement user suggestions, ensuring our platform evolves based on the needs and desires of our valued community members.

                          </Typography>
                        </CardContent>

                      </Card>


                    </Grid>


                  </Grid>

                </Grid>
            </Grid>
        </div>    
    );
  }
  
export default Reasons;