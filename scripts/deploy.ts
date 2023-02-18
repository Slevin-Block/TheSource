import { ethers } from "hardhat";

async function main() {

    /* const amount = ethers.utils.parseEther("1"); */

    const TheSource = await ethers.getContractFactory("TheSource");
    /* const lock = await Lock.deploy(unlockTime, { value: lockedAmount }); */
    const theSource = await TheSource.deploy();
    await theSource.deployed();

    console.log(`Address contract : ${theSource.address}`)
    const msg = await theSource.sayHello()
    console.log(msg)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
