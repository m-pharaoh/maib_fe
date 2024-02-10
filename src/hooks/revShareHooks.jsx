import { useEthers, useContractFunction, useCall, useTokenBalance, useContractCall } from "@usedapp/core";
import { constants, utils, BigNumber } from "ethers";

import {
  rev_share_contract,
  rev_share_interface,
  rev_share_address

  

} from '../constants/contracts';



export function useRegister(){
    const { state, send, events, resetState } = useContractFunction(rev_share_contract, "register");
    return { state, send, events, resetState };
}

export function useClaimRevenue(){
    const { state, send, events, resetState } = useContractFunction(rev_share_contract, "claimRevenue");
    return { state, send, events, resetState };
}

export function useTotalRevenue() {
    const [totalRevenue] = useContractCall({
      abi: rev_share_interface,
      address: rev_share_address,
      method: "totalRevenue",
      args: [], 
    }) ?? [];
    
    return totalRevenue;
}

export function useTotalWeeklyRevenue() {
    const [totalWeeklyRevenue] = useContractCall({
      abi: rev_share_interface,
      address: rev_share_address,
      method: "totalWeeklyRevenue",
      args: [], 
    }) ?? [];
    
    return totalWeeklyRevenue;
}

export function useIsRegistered() {
  const { account } = useEthers();
  const [isRegistered] = useContractCall({
    abi: rev_share_interface,
    address: rev_share_address,
    method: "isRegistered",
    args: [account], 
  }) ?? [];
  
  return isRegistered;
}

export function useClaimableAmounts() {
  const { account } = useEthers();
  const [claimableAmount] = useContractCall({
    abi: rev_share_interface,
    address: rev_share_address,
    method: "claimableAmounts",
    args: [account], 
  }) ?? [];
  
  return claimableAmount;
}

// export function useCalculateClaimableAmount() {
//     const { account } = useEthers();
//     const [claimableAmount] = useContractCall({
//       abi: rev_share_interface,
//       address: rev_share_address,
//       method: "calculateClaimableAmount",
//       args: [account], 
//     }) ?? [];
    
//     return claimableAmount;
//   }
