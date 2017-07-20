var Ping = artifacts.require("./Ping.sol");


contract('Ping', function() {
    Ping.deployed().then((ping) => {
      ping.getPongvalConstant().then(e => console.log(e));
      ping.getPongvalRemote();
      ping.getPongvalConstant().then(e => console.log(e));
    });
});