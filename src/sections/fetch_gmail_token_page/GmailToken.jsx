import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useSearchParams, createSearchParams } from "react-router-dom"




const useStyles = makeStyles((theme) => {
    return {
      container: {
        background: "linear-gradient(to bottom right, rgb(35,23,58), rgb(32,12,122))",
        padding: theme.spacing(4, 8, 6),
        height: '100vh',
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

      purpleTextGlow: {
        position: 'relative',
        display: 'inline-block',
        color: "rgb(220, 160, 240)",
        textShadow: '0 0 100rem rgba(220, 160, 240, 0.8)',
        
      },

      textMt: {
        marginTop: "0.7rem"
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

    }
});

function GmailToken() {
    const classes = useStyles();


    const [searchParams, setSearchParams] = useSearchParams({});
    const gmail_token = searchParams.get("token"); 


    const handleCopy = () => {
      navigator.clipboard.writeText(gmail_token);
    };


    return (
        <div className={ classes.container }>
            <Grid container spacing={1} direction="column" justifyContent='center' alignItems='center'>

              <Grid item>
                <Typography className={classes.whiteText}><strong>Copy the below code, and provide it in Telegram: </strong></Typography>
              </Grid>

              <Grid item>
                {<TextField

                value={gmail_token}
                variant="outlined"
                multiline
                fullWidth
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline,
                    input: classes.textFieldColorRef
                  },
                  readOnly: true,
                  endAdornment: (
                    <Button className={ classes.buttonStyle } onClick={handleCopy}>Copy</Button>
                  ),
                }}
                />}

              </Grid>

              
            </Grid>
        </div>    
    );
  }
  
export default GmailToken;