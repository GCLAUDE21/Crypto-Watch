export const isStableCoin = (coin) => {
  let stables = [
    "usdt",
    "usdc",
    "busd",
    "dai",
    "ust",
    "usds",
    "usd1",
    "usde",
    "pyusd",
    "usdg",
    "rlusd",
    "usdd",
    "usdtb",
    "u",
    "gho",
    "usd0",
    "ylds",
  ];
  if (stables.includes(coin)) {
    return false;
  } else {
    return true;
  }
};
