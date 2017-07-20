var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var People = artifacts.require("./People.sol");
var Ping = artifacts.require("./Ping.sol");
var Pong = artifacts.require("./Pong.sol");
var PongvalRetriever = artifacts.require("./PongvalRetriever.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(People);
  deployer.deploy(Pong, 8).then(() =>{
    return deployer.deploy(Ping, Pong.address);
  });
};
