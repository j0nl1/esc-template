import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

export default (async function (hre: HardhatRuntimeEnvironment) {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deployer:", deployer.address);
  const balance = await deployer.getBalance();
  console.log(
    "Deployer balance:",
    hre.ethers.utils.formatUnits(balance, "ether"),
    "ETH"
  );

  const { deploy } = hre.deployments;

  await deploy("TodoList", {
    from: deployer.address,
    args: ["This is an example content"],
    log: true,
  });
} as DeployFunction);
