import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../sections/rev_share_page/Navbar';
import RevShareArea from '../sections/rev_share_page/RevShareArea';
import Disclaimer from '../sections/Disclaimer';




const useStyles = makeStyles((theme) => {
    return {
      root: {
          flexGrow: 1
      }
    }
  });
  
function RevShare() {
    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <Navbar/>
            <RevShareArea/>
            <Disclaimer/>
        </div>    
    );
}

export default RevShare;