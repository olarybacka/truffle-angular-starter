var Ping = artifacts.require("./Ping.sol");
var Pong = artifacts.require("./Pong.sol");

module.exports = function(deployer) {
  deployer.deploy(Pong, 8).then(() =>{
    return deployer.deploy(Ping, Pong.address);
  });
};
