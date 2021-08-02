import "dotenv/config";

import { HardhatUserConfig } from "hardhat/types";
import tasks from "./tasks";

import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";

import "hardhat-deploy";

const {
  DEFAULT_NETWORK = "hardhat",
  ROPSTEN_KEY,
  ROPSTEN_PROJECT_ID,
} = process.env;

for (const task of tasks) {
  task();
}

const config: HardhatUserConfig = {
  defaultNetwork: DEFAULT_NETWORK,
  solidity: {
    compilers: [{ version: "0.8.4", settings: {} }],
  },
  networks: {
    hardhat: {
      live: false,
    },
    ropsten: {
      live: true,
      url: `https://ropsten.infura.io/v3/${ROPSTEN_PROJECT_ID}`,
      accounts: [`0x${ROPSTEN_KEY}`],
    },
  },
};

export default config;
