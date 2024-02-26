import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";

import MAIB from '../abi/MAIB.json';
import RevenueShare from '../abi/RevenueShare.json';
import VerifyWallet from '../abi/VerifyWallet.json';



// testnet
// export const maib_abi = MAIB.abi
// // export const maib_address = "0xADd15b30E7B4f4408cdCc52999192901895c75A4"
// export const maib_address = "0x3D18B9417B22b1Cff3F30A2e0A75d6BFafc4AF24"
// export const maib_interface = new utils.Interface(maib_abi)
// export const maib_contract = new Contract(maib_address, maib_interface)

// export const rev_share_abi = RevenueShare.abi
// // export const rev_share_address = "0xeFDB9C725bFE510764B807B17155e3F6318aD2f3"
// export const rev_share_address = "0xCa1d0d98e3950aA039657bfF3Cd321bB1a7ef94E"
// export const rev_share_interface = new utils.Interface(rev_share_abi)
// export const rev_share_contract = new Contract(rev_share_address, rev_share_interface)

// export const verify_wallet_abi = VerifyWallet.abi
// export const verify_wallet_address = "0xE0F898Aefb5f1E231f111CF4c1288D571bCb7195"
// export const verify_wallet_interface = new utils.Interface(verify_wallet_abi)
// export const verify_walletcontract = new Contract(verify_wallet_address, verify_wallet_interface)


// PRODUCTION
export const maib_abi = MAIB.abi
export const maib_address = "0xC218EF3Cc52D5D93b0eDEcf30Cdc2a98804cfeC5"
export const maib_interface = new utils.Interface(maib_abi)
export const maib_contract = new Contract(maib_address, maib_interface)

export const rev_share_abi = RevenueShare.abi
export const rev_share_address = "0xA7a59F3DB1C2968d9f9Ed7920Cb9376C3D46310a"
export const rev_share_interface = new utils.Interface(rev_share_abi)
export const rev_share_contract = new Contract(rev_share_address, rev_share_interface)

export const verify_wallet_abi = VerifyWallet.abi
export const verify_wallet_address = "0x452ABc53dC3dFAac477A1D8811Da2fd14FF2FBd2"
export const verify_wallet_interface = new utils.Interface(verify_wallet_abi)
export const verify_walletcontract = new Contract(verify_wallet_address, verify_wallet_interface)
