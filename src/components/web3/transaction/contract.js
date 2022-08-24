import { Contract } from "@ethersproject/contracts";
import { Web3Provider } from "@ethersproject/providers";

// Same ABI for all SC living in EVM compatible networks
export const contractAbi = [
  {
    type: "constructor",
    payable: false,
    inputs: [
      { type: "string", name: "name_" },
      { type: "string", name: "symbol_" },
    ],
  },
  {
    type: "event",
    anonymous: false,
    name: "Approval",
    inputs: [
      { type: "address", name: "owner", indexed: true },
      { type: "address", name: "spender", indexed: true },
      { type: "uint256", name: "value", indexed: false },
    ],
  },
  {
    type: "event",
    anonymous: false,
    name: "Transfer",
    inputs: [
      { type: "address", name: "from", indexed: true },
      { type: "address", name: "to", indexed: true },
      { type: "uint256", name: "value", indexed: false },
    ],
  },
  {
    type: "function",
    name: "allowance",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [
      { type: "address", name: "owner" },
      { type: "address", name: "spender" },
    ],
    outputs: [{ type: "uint256" }],
  },
  {
    type: "function",
    name: "approve",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "spender" },
      { type: "uint256", name: "amount" },
    ],
    outputs: [{ type: "bool" }],
  },
  {
    type: "function",
    name: "balanceOf",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [{ type: "address", name: "account" }],
    outputs: [{ type: "uint256" }],
  },
  {
    type: "function",
    name: "burn",
    constant: false,
    payable: false,
    inputs: [{ type: "uint256", name: "amount" }],
    outputs: [],
  },
  {
    type: "function",
    name: "burnFrom",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "account" },
      { type: "uint256", name: "amount" },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "decimals",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "uint8" }],
  },
  {
    type: "function",
    name: "decreaseAllowance",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "spender" },
      { type: "uint256", name: "subtractedValue" },
    ],
    outputs: [{ type: "bool" }],
  },
  {
    type: "function",
    name: "increaseAllowance",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "spender" },
      { type: "uint256", name: "addedValue" },
    ],
    outputs: [{ type: "bool" }],
  },
  {
    type: "function",
    name: "mint",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "to" },
      { type: "uint256", name: "amount" },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "name",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "string" }],
  },
  {
    type: "function",
    name: "nftPoints",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [{ type: "address" }],
    outputs: [{ type: "uint256" }],
  },
  {
    type: "function",
    name: "symbol",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "string" }],
  },
  {
    type: "function",
    name: "totalSupply",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "uint256" }],
  },
  {
    type: "function",
    name: "transfer",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "to" },
      { type: "uint256", name: "amount" },
    ],
    outputs: [{ type: "bool" }],
  },
  {
    type: "function",
    name: "transferFrom",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "from" },
      { type: "address", name: "to" },
      { type: "uint256", name: "amount" },
    ],
    outputs: [{ type: "bool" }],
  },
];

const contractsAddress = {
  80001: "0x41e6913ce749018910e45980996dac1f99012c96", // MUMBAI
  97: "0x6ec4c5ce6cc67729d89785f715e103e5981c9780", // BSC Test
};
// TODO
export const getContract = (chainId) => {
  // using ethersproject to set signer using default provider
  const provider = new Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contractAddress = contractsAddress[chainId];

  const contract = new Contract(contractAddress, contractAbi, signer);
  return contract;
};
