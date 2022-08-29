import { setupHooks } from "@hooks/web3/setupHooks";
import { ethers } from "ethers";
import { loadContract } from "./utils";

const { createContext, useContext, useEffect, useState } = require("react");

const Web3Context = createContext();

export default function Web3Provider({ children }) {
  const [web3Api, setWeb3api] = useState({
    ethereum: null,
    provider: null,
    contract: null,
    isLoading: true,
    hooks: setupHooks({}),
  });

  useEffect(() => {
    const loadProvider = async () => {
      try {
        const ethereum = window.ethereum;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const contract = await loadContract("NftMarket", provider);
        setWeb3api({
          ethereum,
          provider,
          contract,
          isLoading: false,
          hooks: setupHooks({ ethereum, provider, contract }),
        });
      } catch (err) {
        console.error("Please! Install Metamask");
        setWeb3api((api) => ({ ...api, isLoading: false }));
      }
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

export function useHooks() {
  const { hooks } = useWeb3();
  return hooks;
}
