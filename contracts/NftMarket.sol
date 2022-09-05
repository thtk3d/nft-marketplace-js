// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NftMarket is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _listedItems; // 0
    Counters.Counter private _tokenIds; // 0

    constructor() ERC721("VugomarsNFT", "VGM") {}

    mapping(string => bool) private _existsTokenURI;

    function mintToken(string memory tokenURI)
        public
        payable
        returns (uint256)
    {
        require(!checkTokenURIs(TokenURI), "TokenURI already exists");
        _listedItems.increment();
        _tokenIds.increment();

        uint256 newTokenId = _tokenIds.current();

        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        _existsTokenURI[TokenURI] = true;

        return newTokenId;
    }

    function checkTokenURIs(string memory tokenURI) public view returns (bool) {
        return _existsTokenURI[TokenURI] == true;
    }
}
