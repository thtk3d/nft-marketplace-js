// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NftMarket is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _listedItems; // 0
    Counters.Counter private _tokenIds; // 0


    constructor() ERC721("VugomarsNFT", "VGM") {}


    function mintToken(string memory tokenURI) public payable returns (uint) {
        _listedItems.increment(); // 1
        _tokenIds.increment(); // 1

        uint newTokenId = _tokenIds.current(); //1

        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        return newTokenId;
    }
}
