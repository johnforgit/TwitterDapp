// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Twitter {

    address owner;

    constructor() {owner = msg.sender;}
    struct Tweet
    {
        address author;
        string msg;
        uint256 likes;
        uint256 timestamp;
    }
    
    mapping(address => Tweet[]) tweets;

    modifier onlyAuthor() {
        require(owner == msg.sender,"You are not the owner!!");
        _;
    }

    // function to create a tweet
    function createTweet(string memory msg_) public onlyAuthor{
        Tweet memory newTweet = Tweet(msg.sender, 
                                       msg_, 
                                       0, 
                                       block.timestamp);
        tweets[msg.sender].push(newTweet);
    }

    // function to get all the tweets of a particular author
    function getAllTweets(address user_) public view returns(string[] memory) {
        uint256 i;
        Tweet[] memory userTweets = tweets[user_];
        string[] memory content = new string[](userTweets.length);

        for(i = 0; i < userTweets.length; i++)
            content[i] = userTweets[i].msg;
        return content;
    }

    // function to get a particular tweet
    function getTweet(address owner_, uint256 i_) public view returns(string memory) {
        return tweets[owner_][i_].msg;
    }
}