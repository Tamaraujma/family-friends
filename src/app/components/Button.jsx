import Image from "next/image";

const Button = () => {
  return (
    <div className="flex flex-row space-x-3 pb-2">
      <div className="flex flex-col space-x-3 overflow-x-auto pb-2"></div>
      <button className="flex min-w-fit cursor-pointer items-center space-x-3 rounded-full border border-gray-300 bg-red-300 px-4 py-3">
        <div className="flex space-x-1">
          <div className="-ml-2 h-8 w-8 overflow-hidden rounded-full">
            <Image
              loading="eager"
              alt="Alle"
              src="https://placecats.com/neo/300/200"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <span className="font-medium whitespace-nowrap text-gray-600 hover:bg-red-300 hover:text-white">
            Alle
          </span>
        </div>
      </button>

      <button className="flex min-w-fit cursor-pointer items-center space-x-3 rounded-full border border-gray-300 bg-gray-100 px-4 py-3 hover:bg-red-300">
        <div className="h-8 w-8 overflow-hidden rounded-full">
          <Image
            loading="eager"
            alt="Cat"
            src="https://placecats.com/neo/300/200"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
        <span className="font-medium whitespace-nowrap text-gray-600 hover:text-white">
          Katte
        </span>
      </button>

      <button className="flex min-w-fit cursor-pointer items-center space-x-3 rounded-full border border-gray-300 bg-gray-100 px-4 py-3 hover:bg-red-300">
        <div className="h-8 w-8 overflow-hidden rounded-full">
          <Image
            loading="eager"
            alt="Dog"
            src="https://placecats.com/neo/300/200"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
        <span className="font-medium whitespace-nowrap text-gray-600 hover:text-white">
          Hunde
        </span>
      </button>
    </div>
  );
};

export default Button;
