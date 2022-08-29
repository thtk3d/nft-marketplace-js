import useSWR from "swr";

export const hookFactory =
  ({ provider, ethereum }) =>
  () => {
    const resSwr = useSWR(provider ? "web3/account" : null, async () => {
      const accounts = await provider?.listAccounts();
      const account = accounts[0];
      return account;
    });

    const connect = async () => {
      try {
        await ethereum?.request({ method: "eth_requestAccounts" });
      } catch (err) {
        console.log(err);
      }
    };
    return {
      ...resSwr,
      connect,
    };
  };
