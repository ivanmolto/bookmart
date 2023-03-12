import Image from "next/image";
import Link from "next/link";

const Featured = (props) => {
  const films = props.data;
  return (
    <>
      <div className="font-montserrat max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="text-white mb-4 text-2xl font-semibold flex justify-center">
          Featured Collections
        </div>
        <div className="hidden text-white mb-2 text-md font-normal sm:flex justify-center">
          Powering the GLAM sector using the most advanced NFT technology.
        </div>
        <div className="hidden text-white mb-10 text-md font-normal sm:flex justify-center">
          Multiasset and nested iconic NFTs as never-seen-before.
        </div>
        <div className="sm:hidden text-white mb-10 text-md font-normal flex justify-center">
          NFTs as never-seen-before.
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3 lg:gap-x-6 xl:gap-x-8"
        >
          {films.map(({ id, title, description, accept, action, imgUrl }) => (
            <li key={id} className="relative duration-150 hover:scale-105">
              <Link href={`/collections/${id}`}>
                <div className="group block w-full overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <Image
                    className="pointer-events-none object-cover group-hover:opacity-75"
                    src={imgUrl}
                    alt={title}
                    width={500}
                    height={706}
                  />
                </div>
                <div className="font-montserrat mt-2 flex justify-center text-md sm:text-xl font-semibold sm:font-bold text-white">
                  <div className="inline-block">
                    {title}{" "}
                    <span
                      className={
                        accept
                          ? "ml-4 mb-2 text-xs font-semibold bg-pink-500 px-2 py-1 rounded-md"
                          : "ml-4 mb-2 text-xs font-semibold bg-green-500 px-2 py-1 rounded-md"
                      }
                    >
                      {action}
                    </span>
                  </div>
                </div>
                <div className="font-montserrat pointer-events-none text-center mt-2 mx-auto text-sm font-normal text-gray-400">
                  {description}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Featured;
