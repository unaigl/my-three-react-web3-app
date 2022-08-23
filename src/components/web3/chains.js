export const changeChainById = async (chainID) => {
  if (!window.ethereum)
    return alert("install metamask extension in your browser");
  let chain = chains[chainID];
  let chainIDN = chainID !== Number ? Number(chainID) : chainID;
  // if (chain) return chain;
  // else return "Chains available: ETH, BSC, Polygon";
  try {
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [chains[chainID]],
    });
  } catch (error) {
    console.log("chainID", typeof chainID);
    console.log("chainID", typeof chainIDN);
    console.log("chain", chain);
    console.log("obj", {
      method: "wallet_addEthereumChain",
      params: [chain],
    });
  }
};

/* 
{
        chainId: "0x38",
        chainName: "Binance smart chain",
        nativeCurrency: {
          name: "BNB",
          symbol: "Binance",
          decimals: 18,
        },
        rpcUrls: ["https://bsc-dataseed.binance.org/"],
      },
       */

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
      import.meta.env.VITE_APP_INFURA_KEY
        ? `https://mainnet.infura.io/v3/${import.meta.env.VITE_APP_INFURA_KEY}`
        : undefined,
      import.meta.env.VITE_APP_ALCHEMY_KEY
        ? `https://eth-mainnet.alchemyapi.io/v2/${
            import.meta.env.VITE_APP_ALCHEMY_KEY
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
    rpcUrls: "https://data-seed-prebsc-1-s3.binance.org:8545/",
    // rpcUrls: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    blockExplorerUrls: ["https://testnet.bscscan.com/"],
  },
  80001: {
    chainId: "0x13881",
    chainName: "Polygon Mumbai",
    nativeCurrency: MATIC,
    rpcUrls: [
      import.meta.env.VITE_APP_INFURA_KEY
        ? `https://polygon-mumbai.infura.io/v3/${
            import.meta.env.VITE_APP_INFURA_KEY
          }`
        : undefined,
    ].filter((url) => url !== undefined),
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
};
