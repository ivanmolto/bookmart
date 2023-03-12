import { getAllCollectionIds, getCollectionData } from "../../lib/collections";
import { Disclosure, Tab } from "@headlessui/react";
import { HeartIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Collection(collectionData) {
  const product = collectionData.collectionData;
  return (
    <>
      <Head>
        <title>{product.title} | bookm.art</title>
        <meta
          name="description"
          content="Sharing the trust you have got with people you trust"
        />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>
      <div className="font-montserrat bg-black">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Tab.Group as="div" className="flex flex-col-reverse">
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {product.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only"> {image.name} </span>
                          <span className="absolute inset-0 overflow-hidden rounded-md">
                            <Image
                              src={image.src}
                              alt=""
                              fill
                              className="h-full w-full object-cover object-center"
                            />
                          </span>
                          <span
                            className={classNames(
                              selected ? "ring-sky-400" : "ring-transparent",
                              "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                {product.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="h-full w-full object-cover object-center sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                {product.title} ({product.symbol})
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Contract information</h2>
                <p className="text-lg tracking-tight text-gray-400">
                  <span className="text-white">Contract address:</span>{" "}
                  <a
                    href={`https://goerli.explorer.zksync.io/address/${product.contract}#transactions`}
                    className="hover:underline"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {product.contract.slice(0, 14)}...
                  </a>
                </p>
                <p className="text-lg tracking-tight text-gray-400">
                  <span className="text-white">Max supply:</span>{" "}
                  {product.maxSupply}
                </p>
              </div>
              <div className="mt-3">
                <h2 className="sr-only">Owner information</h2>
                <p className="text-lg tracking-tight text-gray-400">
                  <span className="text-white">Owner address:</span>{" "}
                  <a
                    href={`https://goerli.explorer.zksync.io/address/${product.owner}`}
                    className="hover:underline"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {product.owner.slice(0, 14)}...
                  </a>
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="space-y-6 text-base text-gray-400"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <div className="mt-6">
                <div className="sm:flex-col1 mt-10 flex">
                  <button
                    type="submit"
                    disabled
                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-sky-500 py-3 px-8 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  >
                    Mint
                  </button>

                  <button
                    type="button"
                    className="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <HeartIcon
                      className="h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Add to favorites</span>
                  </button>
                </div>
              </div>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="divide-y divide-gray-200 border-t">
                  {product.details.map((detail) => (
                    <Disclosure as="div" key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <div className="group relative flex w-full items-center justify-between py-6 text-left">
                              <span className="text-base font-medium text-gray-400">
                                {detail.name}
                              </span>
                            </div>
                          </h3>
                          <div className="-mt-4 prose prose-sm pb-6">
                            <ul role="list">
                              {detail.items.map((item) => (
                                <li
                                  key={item}
                                  className="text-base text-gray-400"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllCollectionIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const collectionData = getCollectionData(params.id);
  return {
    props: {
      collectionData,
    },
  };
}
