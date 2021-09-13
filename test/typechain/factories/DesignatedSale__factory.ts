/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DesignatedSale,
  DesignatedSaleInterface,
} from "../DesignatedSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "canBid",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "bidPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "canClaim",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102b5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635f11a72b1461003b578063651199511461006a575b600080fd5b61005661004936600461015e565b6000979650505050505050565b604051901515815260200160405180910390f35b61005661007836600461015e565b600080600088806020019051810190610091919061012f565b90925090506001600160a01b0381166100f05760405162461bcd60e51b815260206004820152601760248201527f53484f59553a20494e56414c49445f44455349474e4545000000000000000000604482015260640160405180910390fd5b8682111580156101115750806001600160a01b0316886001600160a01b0316145b9a9950505050505050505050565b803561012a81610267565b919050565b60008060408385031215610141578182fd5b82519150602083015161015381610267565b809150509250929050565b600080600080600080600060e0888a031215610178578283fd5b87359650602088013567ffffffffffffffff80821115610196578485fd5b818a0191508a601f8301126101a9578485fd5b8135818111156101bb576101bb610251565b604051601f8201601f19908116603f011681019083821181831017156101e3576101e3610251565b816040528281528d60208487010111156101fb578788fd5b826020860160208301379182016020018790525097506102209150506040890161011f565b9450606088013593506102356080890161011f565b925060a0880135915060c0880135905092959891949750929550565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461027c57600080fd5b5056fea2646970667358221220c964f24c680c719421bc3b71882f03142a0725b198aeee739786e7362e07339464736f6c63430008030033";

export class DesignatedSale__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DesignatedSale> {
    return super.deploy(overrides || {}) as Promise<DesignatedSale>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DesignatedSale {
    return super.attach(address) as DesignatedSale;
  }
  connect(signer: Signer): DesignatedSale__factory {
    return super.connect(signer) as DesignatedSale__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DesignatedSaleInterface {
    return new utils.Interface(_abi) as DesignatedSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DesignatedSale {
    return new Contract(address, _abi, signerOrProvider) as DesignatedSale;
  }
}