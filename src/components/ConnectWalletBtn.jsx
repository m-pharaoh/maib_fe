import Button from '@material-ui/core/Button';
import { useEthers, shortenAddress } from '@usedapp/core';

function ConnectWalletBtn(props) {
    const { activateBrowserWallet, account, deactivate } = useEthers();
    const isConnected = account !== undefined;
    
    let btnConnected = <Button className={ props.classes.buttonStyle } variant="contained"  size='large' onClick={deactivate}>
                            {account ? shortenAddress(account): account}
                        </Button>;
    
    let btnDisconneted = <Button className={ props.classes.buttonStyle } variant="contained"  size='large' onClick={() => activateBrowserWallet()}>
                            Connect Wallet
                        </Button>;

    if(isConnected){
        return (btnConnected);
    }
    return (btnDisconneted);
}

export default ConnectWalletBtn;