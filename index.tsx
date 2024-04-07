import { ConnectWallet, Web3Button, useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import { CONTRACT_ADDRESS } from "../constants/addresses";

const Home: NextPage = () => {
const address = useAddress(); // useAddress is a webhook that is used to get the wallet address of our wallet

  const {
    contract 
  } = useContract(CONTRACT_ADDRESS); // allows us to use a contract

  const {
    data: Tweet,
    isLoading: isTweetLoading,
  } = useContractRead(contract, "getTweet");
  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <ConnectWallet/> // working connect wallet button
      <h1>
        Twitter Dapp
        <div className={styles.twitterContainer}>
          {isTweetLoading ? (
            <p 
              style = {{
                fontSize:"5rem",
                fontWeight:"bold",
              }}
              >NO TWEET</p>
          ) : (
            <p style = {{
              fontSize:"5rem",
              fontWeight:"bold",
            }}>Tweet</p>
          )
        }
        {address && (
          <div className={styles.buttonContainer}>
            <Web3Button  // buttons for contract functions
              contractAddress={CONTRACT_ADDRESS}
              action = {(contract) => contract.call("getAllTweets")}>
              GET ALL TWEETS
            </Web3Button>
              
            <Web3Button 
              contractAddress={CONTRACT_ADDRESS}
              action = {(contract) => contract.call("getTweet")}>
              GET TWEET
            </Web3Button>
          </div>
        )}
        </div>
      </h1>
      </div>
    </main>
  );
};

export default Home;
