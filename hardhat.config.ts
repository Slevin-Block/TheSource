import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks : {
    hardhat : {
    },
    ganache : {
        url : "http://192.168.1.128:8545",
        chainId : 1337,
    }
  }
};

export default config;
