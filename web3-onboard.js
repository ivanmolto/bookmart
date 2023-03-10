import injectedModule from "@web3-onboard/injected-wallets";
import argentModule from "@web3-onboard/argent";

import { init } from "@web3-onboard/react";

const argent = argentModule();

const injected = injectedModule({
  custom: [
    // include custom injected wallet modules here
  ],
  filter: {
    // mapping of wallet labels to filter here
  },
});

export default init({
  // An array of wallet modules that you would like to be presented to the user to select from when connecting a wallet.
  wallets: [injected, argent],
  // An array of Chains that your app supports
  chains: [
    {
      // hex encoded string, eg '0x1' for Ethereum Mainnet
      id: "0x118",
      // string indicating chain namespace. Defaults to 'evm' but will allow other chain namespaces in the future
      namespace: "evm",
      // the native token symbol, eg ETH, BNB, MATIC
      token: "ETH",
      // used for display, eg Ethereum Mainnet
      label: "zkSync Era Testnet",
      // used for network requests
      rpcUrl: "https://zksync2-testnet.zksync.dev",
    },
  ],
  appMetadata: {
    // The name of your dApp
    name: "bookm.art",
    // SVG icon string, with height or width (whichever is larger) set to 100% or a valid image URL
    icon: "<svg></svg>",
    // Optional wide format logo (ie icon and text) to be displayed in the sidebar of connect modal. Defaults to icon if not provided
    logo: "<svg></svg>",
    // The description of your app
    description: "bookm.art",
    // The url to a getting started guide for app
    gettingStartedGuide: "https://...",
    // url that points to more information about app
    explore: "https://...",
    // if your app ony supports injected wallets and when no injected wallets detected, recommend the use to install some
    recommendedInjectedWallets: [
      {
        // display name
        name: "Metamask",
        // link to download wallet
        url: "https://metamask.io",
      },
    ],
    // Optional - but allows for dapps to require users to agree to TOS and privacy policy before connecting a wallet
    // agreement: {
    // version: "1.0.0",
    // termsUrl: "https://...",
    // privacyUrl: "https://...",
    // },
  },
  theme: "dark",
});
