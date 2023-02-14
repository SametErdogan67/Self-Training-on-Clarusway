let btc = document.getElementById("bitcoin");
let eth = document.getElementById("ethereum");
let bnb = document.getElementById("bnb");

let solana = document.getElementById("solana");

let settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Csolana&vs_currencies=usd",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  bnb.innerHTML = response.binancecoin.usd;
  solana.innerHTML = response.solana.usd;
});

// let baseURL =
//   "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Cavalanche-2&vs_currencies=usd";
