const ERC223Token = artifacts.require("ERC223Token");
const TokenVesting = artifacts.require("TokenVesting");

module.exports = function(deployer) {
  // deployer.deploy(ERC223Token, "Buvi","Bu",18,10000);
  // deployer.deploy(TokenVesting, "0xCD54d12fFA5942DE526720a862186d07F1c8f24A")
  deployer.deploy(ERC223Token, "Buvi","Bu",18,400000000).then(function() {
    console.log("---------",ERC223Token.address)
    return deployer.deploy(TokenVesting,1642684500,"0x0e8f877E33143f3EC2038C0cb859f77275eE9EfC","0x69F81188931A8dbCfeA4c82F5B794648Bb0bC1F1","0x4084042Fc3c4042087Af629F7f924555c0Dd8dFB", ERC223Token.address);
  });
};
