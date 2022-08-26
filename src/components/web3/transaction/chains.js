export const changeChainById = async (chainID) => {
  if (!window.ethereum)
    return alert("install metamask extension in your browser");
  try {
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: chains[chainID].chainId }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [chains[chainID]],
        });
      } catch (addError) {
        console.log("error: ", addError);
        if (ex.code === 32002)
          return alert("already pending request from user in metamask");
        else
          return alert(
            "Disconnect wallet from metamask configuration and try again!"
          );
      }
    }
    // handle other "switch" errors
  }
  return;
};

const ETH = {
  name: "Ether",
  symbol: "ETH",
  decimals: 18,
};
const MATIC = {
  name: "Matic",
  symbol: "MATIC",
  decimals: 18,
};
const BNB = {
  name: "Binance",
  symbol: "BNB",
  decimals: 18,
};

const chains = {
  1: {
    chainId: "0x1",
    chainName: "Ethereum mainnet",
    nativeCurrency: ETH,
    rpcUrls: [
      // import.meta.env.VITE_APP_INFURA_KEY
      //   ? `https://mainnet.infura.io/v3/${import.meta.env.VITE_APP_INFURA_KEY}`
      //   : undefined,
      import.meta.env.VITE_APP_ALCHEMY_MAINNET_KEY
        ? `https://eth-mainnet.alchemyapi.io/v2/${
            import.meta.env.VITE_APP_ALCHEMY_MAINNET_KEY
          }`
        : undefined,
      "https://cloudflare-eth.com",
    ].filter((url) => url !== undefined),
    blockExplorerUrls: ["https://etherscan.com/"],
  },
  97: {
    chainId: "0x61",
    chainName: "Binance Testnet",
    nativeCurrency: BNB,
    rpcUrls: [
      "https://data-seed-prebsc-1-s1.binance.org:8545/",
      "https://data-seed-prebsc-2-s1.binance.org:8545/",
      "http://data-seed-prebsc-1-s2.binance.org:8545/",
      "https://data-seed-prebsc-2-s3.binance.org:8545/",
    ],
    // rpcUrls: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    blockExplorerUrls: ["https://testnet.bscscan.com/"],
  },
  80001: {
    chainId: "0x13881",
    chainName: "Polygon Mumbai",
    nativeCurrency: MATIC,
    rpcUrls: [
      import.meta.env.VITE_APP_ALCHEMY_MAINNET_KEY
        ? `https://polygon-mumbai.g.alchemy.com/v2/${
            import.meta.env.VITE_APP_ALCHEMY_POLYGON_KEY
          }`
        : undefined,
    ],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
};
