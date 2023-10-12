export const formatBalance = (rawBalance: string) => {
  const balance = (parseFloat(rawBalance) / 10 ** 18).toFixed(2);
  return balance;
};

export const formatChainAsNum = (chainIdHex: string) => {
  const chainId = parseInt(chainIdHex);
  return chainId;
};

export const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
