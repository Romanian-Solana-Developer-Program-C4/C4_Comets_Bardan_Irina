import { Keypair } from '@solana/web3.js';

const keypair = Keypair.generate();

console.log(`Public Key: ${keypair.publicKey}`);
console.log(`Secret Key: ${keypair.secretKey}]`);