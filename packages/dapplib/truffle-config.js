require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom glimpse frown slab carpet rebel stereo evil good end army gentle'; 
let testAccounts = [
"0xd85391d9adc5395e73b7ec268f410a5ef0e11d6a5c0a68d09af932ce64deb2d9",
"0x1ba4a223fd31e2d52836b68c2412e306dc3e2627a2f390f1f6552664f239e83e",
"0xbea0e5d7fabda05d8580a85c25a8c0ec51c97e75b40f885602914942d4c6a568",
"0x5dad4af1a4d9664cabe14fe2dd11f67de656e312676662b3ab7b542fc1b26f28",
"0xe07b2f8065ac8ad92d5a7772b82f4232355524611a9117edd21e1c5ee7f67125",
"0xeb364a4d767da2caf520bd926b7a75b3c2a9e966b6f0e56350691701a8f647e1",
"0x4a1306b94b38d17d95cce116e27dfdf1174827b89a33f9ca5b14fec6420133bf",
"0xd20ea0252d9aa00b95b7a5cd52f1aef505c138bda78be5f17263190343f358b2",
"0x43a04a431fe6735df7fad640a3b61d2a4b296d55f9b0c215aafd624d97f8a348",
"0x5e0123de803cb3ebee158b3dc4cb7cee640b30db160e6a5452df66888d33667b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


