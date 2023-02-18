// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract TheSource {

    // One article CID product by a author
    struct Article {
        string CID;
        address author;
    }

    // year => month => articles[] CID
    mapping(uint => mapping(uint => Article[])) articles;

    function sayHello () public pure returns (string memory) {
        return 'Hello Slevin';
    }
}