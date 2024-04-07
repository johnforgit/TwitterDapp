# TwitterDapp
Decentralized twitter application using thirdweb

## About the app
This app was made as part of a learning attempt to deploy a smart contract in thirdweb.  
The smart contract is easily understandable as it's not too much complex and only uses existing methods to make a twitter Dapp. 

## Requirements
1. Metamask wallet. You can take a wallet by visiting [metamask](https://metamask.io/)
2. [Node js](https://nodejs.org/en)
3. [thirdweb](https://thirdweb.com/)

## Running the Dapp
1. After installing all the requirements create a contract using thirdweb
2. For creating a contract : ```npx thirdweb create --contract```
3. For creating an app : ```npx thirdweb create --app```
4. You can also use the command ```npx thirdweb@latest create```  
   In case you use this command every thirdweb command hereafter should have ```npx thirdweb@latest``` in it
5. After the successful creation of your contract you can deploy it by : ```npx thirdweb deploy``` in your terminal
6. This will take us to the thirdweb dashboard. Connect your metamask wallet and deploy your contract on your preferred chain
7. After successful deploying we can see the read and write functions of our contract and interact with it from the explorer tab. We can also get the code snippets for javascript and many more from the code snippets tab. Much easier when compared to other dev frameworks
8. To run the frontend make the changes accordingly. I chose a next.js project and chose typescript as the language
9. Based on what you have installed(npm or yarn) you can run the Dapp and it will open in localhost
