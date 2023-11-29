function formatHash(wallet: string) {
    return wallet.slice(0, 5) + '...' + wallet.slice(-5);
  }
  
  export { formatHash };