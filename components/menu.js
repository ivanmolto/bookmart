import Link from "next/link";
import { useConnectWallet } from "@web3-onboard/react";

const Menu = () => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  return (
    <>
      <div className="font-montserrat">
        <div className="flex justify-between px-4 py-3">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <div
                  aria-label="Bookm.Art"
                  className="inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28px"
                    viewBox="0 0 24 24"
                    width="28px"
                    fill="#FFFFFF"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 2v5l-1-.75L15 9V4h2zm3 12H8V4h5v9l3-2.25L19 13V4h1v12z" />
                  </svg>
                  <span className="text-white ml-4 text-xl font-normal">
                    bookm.art
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="px-2 pt-2 pb-5 sm:flex sm:py-0 sm:px-0">
              <div className="flex ml-4 md:ml-20 lg:ml-16 mr-2">
                <button
                  type="button"
                  disabled={connecting}
                  onClick={() => (wallet ? disconnect(wallet) : connect())}
                  className="hidden sm:block items-center gap-x-2 rounded-md bg-sky-500 py-2.5 px-3.5 text-base font-semibold text-white hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  {connecting
                    ? "Connecting wallet"
                    : wallet
                    ? "Disconnect wallet"
                    : "Connect wallet"}
                </button>
                <button
                  type="button"
                  disabled={connecting}
                  onClick={() => (wallet ? disconnect(wallet) : connect())}
                  className="sm:hidden items-center gap-x-2 rounded-md bg-sky-500 py-2.5 px-3.5 text-base font-semibold text-white hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  {connecting
                    ? "Connecting"
                    : wallet
                    ? "Disconnect"
                    : "Connect"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
