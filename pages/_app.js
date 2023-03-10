import "@/styles/globals.css";
import Layout from "../components/layout";

import web3Onboard from "../web3-onboard";
import { Web3OnboardProvider } from "@web3-onboard/react";

export default function App({ Component, pageProps }) {
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3OnboardProvider>
  );
}
