import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import Snackbars from '../../components/Snackbars';


import { useEthers, shortenAddress } from '@usedapp/core';


import { useSetWalletToAccessCode } from '../../hooks/verifyWalletHooks.jsx'


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
        // textShadow: '0 0 100rem rgba(63, 81, 181, 0.8)',
      },

      purpleTextGlow: {
        position: 'relative',
        display: 'inline-block',
        color: "rgb(220, 160, 240)",
        // textShadow: '0 0 100rem rgba(220, 160, 240, 0.8)',
        
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

function VerifyAccessCode() {
    const classes = useStyles();

    const { account } = useEthers();

    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [encryptedUsername, setEncryptedUsername] = useState('');


    const handleCopy = () => {
      navigator.clipboard.writeText(account);
    };


    // set access code to wallet
    const { state: setWalletToAccessCodeState, send: setWalletToAccessCode, events: setWalletToAccessCodeEvents, resetState: resetSetWalletToAccessCode } = useSetWalletToAccessCode();
    function handleSetWalletToAccessCode(){        
        setWalletToAccessCode(encryptedUsername).catch(err => {
            setOpen(true);
            setSeverity("warning");
        })
    }

    useEffect(() => {
        if (setWalletToAccessCodeState.status === "Success") {
            setOpen(true);
            setSeverity("success");
        }
        else if (setWalletToAccessCodeState.status === "Mining") {
            setOpen(true);
            setSeverity("info");
        }
        else if (setWalletToAccessCodeState.status === "Fail") {
            setOpen(true);
            setSeverity("error");
        }
        
    }, [setWalletToAccessCodeState]);


    return (
        <div className={ classes.container }>
            <Grid container spacing={1} direction="column" justifyContent='center' alignItems='center'>
            <Snackbars open={open} setOpen={setOpen} severity={severity}/>
              <Grid item>
                <TextField
                // className={ classes.textField }
                InputProps={{ 
                  className: classes.whiteText,
                  notchedOutline: classes.notchedOutline,
                  input: classes.textFieldColorRef,
                  classes: {
                    notchedOutline: classes.notchedOutline,
                    
                  },
                }}

                InputLabelProps={{ className: classes.whiteText }}
              
                label="ENTER ACCESS CODE" 
                variant="outlined"
                size="medium"
                multiline
                onChange={(event) => setEncryptedUsername(event.target.value)}
                /> 

              </Grid>
              <Grid item>
                <Button className={classes.buttonStyle} onClick={() => handleSetWalletToAccessCode()}>VERIFY ACCESS CODE</Button>
              </Grid>

              <Grid item>
                <Typography className={classes.blueText}>Copy your wallet address below after verifying: </Typography>
              </Grid>

              <Grid item>
                {<TextField

                value={account}
                variant="outlined"
                // multiline
                // fullWidth
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
  
export default VerifyAccessCode;