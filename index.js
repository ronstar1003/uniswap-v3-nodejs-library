const { Init, tokens } = require("./lib");
require("dotenv").config();

async function main() {
  const lib = Init(
    process.env.WALLET_ADDRESS,
    process.env.PRIVATE_KEY,
    process.env.RPC_URL
  );
  const balance = await lib.GetAmount(tokens.MATIC);
  console.log("Balance:", balance);
  const price = await lib.GetCurrentPrice(tokens.WMATIC, tokens.USDC, 500);
  console.log("Price:", price);
}

main();
