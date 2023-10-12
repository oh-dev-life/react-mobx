"use client";
import { formatChainAsNum } from "@/helpers/formats";
import { useMetaMask } from "@/hooks/useMetaMask";
import { Button } from "@mui/material";

export default function Home() {
  const {
    wallet,
    hasProvider,
    connectMetaMask,
    errorMessage,
    error,
    clearError,
  } = useMetaMask();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>Injected Provider {hasProvider ? "DOES" : "DOES NOT"} Exist</div>
      {typeof window !== "undefined" &&
        window.ethereum?.isMetamask &&
        wallet.accounts.length < 1 && (
          <Button
            onClick={connectMetaMask}
            variant="contained"
            className="cursor-pointer"
          >
            connect metamask
          </Button>
        )}
      {wallet.accounts.length > 0 && (
        <>
          <div>Wallet Accounts: {wallet.accounts[0]}</div>
          <div>Wallet Balance: {wallet.balance}</div>
          <div>Hex ChainId: {wallet.chainId}</div>
          <div>Numeric ChainId: {formatChainAsNum(wallet.chainId)}</div>
        </>
      )}
      {error && (
        <div onClick={clearError}>
          <strong>Error:</strong> {errorMessage}
        </div>
      )}
    </main>
  );
}
