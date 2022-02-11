const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile.js');

const provider = new HDWalletProvider(
    'shrimp flock grow spatial foot enact vanish shoulder fit rude simple desk',
    'https://rinkeby.infura.io/v3/02fd88084a4743c6937b565532863ecf'
);

const web3 = new Web3(provider);

const deploy = async () =>{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account - ', accounts[0]);
    
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0]})

    console.log('Result deployed to - ',result.options.address);
};

deploy();