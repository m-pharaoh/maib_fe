import { useEthers, useContractFunction, useCall, useTokenBalance, useContractCall } from "@usedapp/core";
import { constants, utils, BigNumber } from "ethers";

import {
  verify_walletcontract,  

} from '../constants/contracts';



export function useSetWalletToAccessCode(){
    const { state, send, events, resetState } = useContractFunction(verify_walletcontract, "setWalletToAccessCode");
    return { state, send, events, resetState };
}

