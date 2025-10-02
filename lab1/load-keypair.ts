import "dotenv/config";
import { getKeypairFromEnvironment } from '@solana-developers/helpers';

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`public key: ${keypair.publicKey}, secret key: ${keypair.secretKey}`);


