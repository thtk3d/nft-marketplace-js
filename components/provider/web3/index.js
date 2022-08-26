import { ethers } from "ethers";

const { createContext, useContext, useEffect, useState } = require("react");

const Web3Context = createContext();

export default function Web3Provider({ children }) {
  const [web3Api, setWeb3api] = useState({
    ethereum: null,
    provider: null,
    contract: null,
    isLoading: true,
  });

  useEffect(() => {
    const loadProvider = async () => {
      const eth = window.ethereum;
      const provider = new ethers.providers.Web3Provider(eth);
      setWeb3api({
        ethereum: eth,
        provider,
        contract: null,
        isLoading: false,
      });
    };
    loadProvider();
  }, []);

  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
}

export function useWeb3() {
  return useContext(Web3Context);
}
