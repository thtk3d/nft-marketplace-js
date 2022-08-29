import useSWR from "swr";

export const hookFactory = (deps) => (params) => {
  const resSwr = useSWR("web3/account", () => {
    console.log(deps);
    console.log(params);
    // logic get account
    // logic balance
    // logic connect account
    return "Test Hook useAccount";
  });
  return resSwr;
};

export const useAccount = hookFactory({ ethereum: null, provider: null });
