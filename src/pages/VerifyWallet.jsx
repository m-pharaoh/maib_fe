import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../sections/verify_wallet_page/Navbar';
import VerifyAccessCode from '../sections/verify_wallet_page/VerifyAccessCode';
import Disclaimer from '../sections/Disclaimer';




const useStyles = makeStyles((theme) => {
    return {
      root: {
          flexGrow: 1
      }
    }
  });
  
function VerifyWallet() {
    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <Navbar/>
            <VerifyAccessCode/>
            <Disclaimer/>
        </div>    
    );
}

export default VerifyWallet;