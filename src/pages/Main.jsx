import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../sections/main_page/Navbar';
import Info from '../sections/main_page/Info';
import Explanation from '../sections/main_page/Explanation';
import Bots from '../sections/main_page/Bots';
import Reasons from '../sections/main_page/Reasons';
import Disclaimer from '../sections/Disclaimer';


const useStyles = makeStyles((theme) => {
    return {
      root: {
          flexGrow: 1
      }
    }
  });
  
  function Main() {
      const classes = useStyles();
      return (
          <div className={ classes.root }>
            <Navbar/>
            <Info/>
            <Explanation/>
            <Bots/>
            <Reasons/>
            <Disclaimer/>
          </div>    
      );
    }
    
  export default Main;