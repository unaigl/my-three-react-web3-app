import { getContract } from "./contract";

// writeToContractUsingWeb3React
const claimToken = async (provider, account, chainId, amount) => {
  try {
    const myContract = getContract(/* provider, account,  */ chainId);
    // Metamask calculates gas, but, for walletConnect and coinbase we need to set gas limit
    const overrides = {
      gasLimit: 230000,
    };
    const txResponse = await myContract.mint(account, amount, overrides);
    const txReceipt = await txResponse.wait();
    console.log(txReceipt);
    // alert(txReceipt);
  } catch (ex) {
    console.log(ex);
    if (ex.code === 32002)
      return alert("already pending request from user in metamask");

    if (ex.code === 4001) return alert("User denied transaction signature");
    return alert('"Connect / Disconnect" your wallet and try again.');
  }
};

const burnToken = async (provider, account, chainId, amount) => {
  try {
    const myContract = getContract(/* provider, account,  */ chainId);
    // Metamask calculates gas, but, for walletConnect and coinbase we need to set gas limit
    const overrides = {
      gasLimit: 230000,
    };
    const txResponse = await myContract.burn(amount, overrides);
    const txReceipt = await txResponse.wait();
    console.log(txReceipt);
    // alert(txReceipt);
  } catch (ex) {
    console.log(ex);
    if (ex.code === 32002)
      return alert("already pending request from user in metamask");
    if (ex.code === 4001) return alert("User denied transaction signature");
    return alert('"Connect / Disconnect" your wallet and try again.');
  }
};

export { claimToken, burnToken };
