// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const TechroadMarket = await hre.ethers.getContractFactory("TechroadMarket");
  const market = await TechroadMarket.deploy(
    "0xd2E0AbEDF7edc31554f34c1AdB36A482f67A387a",
    "0xd2E0AbEDF7edc31554f34c1AdB36A482f67A387a",
    "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    1000,
    1000000000000000
  ); // constructor can be pass from here

  await techroad.deployed();

  console.log("techroad deployed to:", techroad.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
