const ClubFighters = artifacts.require("ClubFighters");

module.exports = (deployer) => {
	deployer.deploy(ClubFighters);
};
