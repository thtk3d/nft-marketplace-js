import { hookFactory as createAccountHook, useAccountHook } from "./useAccount";

export const setupHooks = (deps) => {
  return {
    useAccount: createAccountHook(deps),
  };
};
