import "dotenv/config";
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { airdropIfRequired, getKeypairFromEnvironment } from "@solana-developers/helpers";

const url = clusterApiUrl("devnet");
const connection = new Connection(url);

const keypair = getKeypairFromEnvironment("SECRET_KEY");


// this may take a few seconds
// if you already have enough SOL, it won't do anything
// otherwise it will request an airdrop
// the 3rd parameter is how much SOL we want to have at least
// the 4th parameter is how much SOL we want to request at most
// (the airdrop limit is 2 SOL on devnet as of June 2024)
await airdropIfRequired(
    connection, 
    keypair.publicKey, 
    1 * LAMPORTS_PER_SOL, 
    0.1 * LAMPORTS_PER_SOL
);

const balanceInLamports = await connection.getBalance(keypair.publicKey);
const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`URL is ${url}`);
console.log(`Balance in Lamports is ${balanceInLamports}`);
console.log(`Balance in SOL is ${balanceInSol}`);