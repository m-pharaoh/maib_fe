import { makeStyles } from '@material-ui/core/styles';

import GmailToken from '../sections/fetch_gmail_token_page/GmailToken';
import Disclaimer from '../sections/Disclaimer';




const useStyles = makeStyles((theme) => {
    return {
      root: {
          flexGrow: 1
      }
    }
  });
  
function FetchGmailToken() {
    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <GmailToken/>
            <Disclaimer/>
        </div>    
    );
}

export default FetchGmailToken;