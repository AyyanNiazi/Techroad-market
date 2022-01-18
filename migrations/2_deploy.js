// migrations/2_deploy.js
// SPDX-License-Identifier: MIT
const TechroadMarket = artifacts.require("TechroadMarket");

module.exports = function(deployer) {
  deployer.deploy(TechroadMarket);
};