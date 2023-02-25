const express = require('express');
const Web3 = require('web3');

const Client = require("@replit/database");
const db = new Client();

const app = express();
const web3 = new Web3()

app.get('/', (req, res) => {

  res.send('Hello Express app!')
  const wallet = web3.eth.accounts.create([process.env.WalletEntropy]);
  
  console.log(wallet)
  console.log(wallet.address)
  
});

app.post('/sign', (req, res) => {
  const wallet = web3.eth.accounts.create([process.env.WalletEntropy]);
  wallet.address
  
})

app.post("/createAccount", async (req, res) => {
  
})

app.listen(3000, () => {
  console.log('server started');
});
