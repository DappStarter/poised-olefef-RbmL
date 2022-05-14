require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift response ranch proud grace cover army gather'; 
let testAccounts = [
"0x55cdb64a4b59b0af02ba3be4d1d84fdbb067948b566b054a6ee4ef2fa17edd23",
"0xb0386d5c41862956f9fd1797dad589cf607105e07cc6e6a987d51b84d8a20aad",
"0x0215ffc75830594f6058c717c4779e32cca023629695c752032ad1d2d2f41d1f",
"0xab17dc1aaaa38d86bb78f20190c9f953bb1e5f23c102991a14b5230d8d085da6",
"0x5dd286bbe0994418f3c2f18cf43983ccac96da52597ca52782f36653db082769",
"0x2f138e9ba0ceeabfcc7a8c5b2412d6206c0c1eb104da934771006ca03964d372",
"0x5794478541b70b2e9997e56ab22003d0e0a4667e37b7f3db38a6f61278451abf",
"0x8edaaa3b7d61dfa01adadaee4c325f66f386b4a40011d447dd3bb02c6e68d9f8",
"0xf0cad9d1c748f01cd75847590da482b7482b805d90f5c11f7f7990703012c0f2",
"0x53544e2ca1e61f8ffdc8a2e3028d8ebab04d4e4a7bc32a959000a323c7e6b3c5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


