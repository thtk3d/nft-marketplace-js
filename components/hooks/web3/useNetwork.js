import useSWR from "swr";

const NETWORKS = {
  1: "Ethereum Main Network",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  56: "Binance Smart Chain",
  97: "Binance Test Network",
  1337: "Ganache",
};

export const hookFactory =
  ({ provider, isLoading }) =>
  () => {
    const { data, isValidating, ...swr } = useSWR(
      provider ? "web3/useNetwork" : null,
      async () => {
        const network = await provider?.getNetwork();
        const chainId = await network?.chainId;

        if (!chainId) {
          throw "Network not Support! Please Refesh your browser or Change Network";
        }

        return NETWORKS[chainId];
      },
      {
        revalidateOnFocus: false,
      }
    );

    return {
      ...swr,
      data,
      isLoading: isLoading || isValidating,
    };
  };
