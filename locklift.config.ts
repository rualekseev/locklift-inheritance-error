import { lockliftChai, LockliftConfig } from "locklift";
import { FactorySource } from "./build/factorySource";
import * as dotenv from "dotenv";
import chai from "chai";
import "@broxus/locklift-deploy";
import { Deployments } from "@broxus/locklift-deploy";

dotenv.config();

import { locklift_network } from "./networks/locklift-local";


chai.use(lockliftChai);

declare module "locklift" {
  //@ts-ignore
  export interface Locklift {
      deployments: Deployments<FactorySource>;
  }
}

declare global {
  const locklift: import("locklift").Locklift<FactorySource>;
}

const config: LockliftConfig = {
  compiler: {
    // Specify path to your TON-Solidity-Compiler
    // path: "/mnt/o/projects/broxus/TON-Solidity-Compiler/build/solc/solc",
    // Or specify version of compiler

    // version: "0.66.0",
    version: "0.77.0",

    // Specify config for extarnal contracts as in exapmple
    // externalContractsArtifacts: {
    //   "node_modules/broxus-ton-tokens-contracts/build": ['TokenRoot', 'TokenWallet']
    // }
  },
  networks: { 
    locklift: locklift_network
  },
  mocha: {
    timeout: 2000000,
  },
};

export default config;
