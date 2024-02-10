import Main from "./pages/Main.jsx";
import RevShare from "./pages/RevShare.jsx";
import VerifyWallet from "./pages/VerifyWallet.jsx";
import FetchGmailToken from "./pages/FetchGmailToken.jsx";

import {DAppProvider, ChainId} from '@usedapp/core';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <DAppProvider config={{multicallAddresses: {
      [ChainId.Localhost]: '0x137f7c84559D20ce1F01b684a45ead90e79140ce'
    },
    }}>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/verify" element={<VerifyWallet/>} />
          <Route path="/revshare" element={<RevShare/>} />
          <Route path="/gmail" element={<FetchGmailToken/>} />
        </Routes>
      </Router>
    </DAppProvider>
    
  );
}

export default App;
