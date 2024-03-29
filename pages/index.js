import Head from "next/head";
import { getAllCollections } from "../lib/collections";
import Featured from "../components/featured";

import { useConnectWallet } from "@web3-onboard/react";
import { ethers } from "ethers";

const Home = ({ allCollections }) => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  let ethersProvider;

  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, "any");
  }
  return (
    <>
      <Head>
        <title>bookm.art</title>
        <meta
          name="description"
          content="Powering the GLAM sector with richer digital experiences for their visitors using the NFT technology from RMRK built on zkSync Era"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button
          disabled={connecting}
          onClick={() => (wallet ? disconnect(wallet) : connect())}
        >
          {connecting ? "Connecting" : wallet ? "Disconnect" : "Connect"}
        </button>
        <div>
          <Featured data={allCollections} />
        </div>
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const allCollections = getAllCollections();
  return {
    props: { allCollections },
  };
}
