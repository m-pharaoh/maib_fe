import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SetAlert(props) {
    const severity = props.severity;
    const handleClose = props.handleClose;

    if (severity === "success") {
        return <Alert onClose={handleClose} severity={severity}>
                Transaction Success!
            </Alert>;
    }
    else if (severity === "info") {
        return <Alert onClose={handleClose} severity={severity}>
                Transaction Pending...
                </Alert>;
    }
    else if (severity === "warning") {
        return <Alert onClose={handleClose} severity={severity}>
                Error sending this transaction!
                </Alert>;
    }
    else if (severity === "error") {
        return <Alert onClose={handleClose} severity={severity}>
                Transaction Failed!
                </Alert>;
    }
  }

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Snackbars(props) {
  const classes = useStyles();

  const open = props.open;
  const setOpen = props.setOpen;
  const severity = props.severity;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      <Snackbar anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open} autoHideDuration={6000} onClose={handleClose}>
        <SetAlert severity={severity} handleClose={handleClose}/>
      </Snackbar>
    </div>
  );
}
