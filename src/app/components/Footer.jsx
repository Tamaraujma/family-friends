import { FiHome } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa6";
import { IoChatbubbleOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import "../globals.css";

const Footer = () => {
  return (
    <div className="footer w-<375px> h-<78px> border-t border-gray-200 bg-red-100 px-6 py-4">
      <div className="mx-auto flex max-w-md items-center justify-between">
        <button className="button flex flex-col items-center space-y-1">
          <FiHome className="h-6 w-6 cursor-pointer text-red-300" />
        </button>

        <button className="flex flex-col items-center">
          <FaRegStar className="h-6 w-6 cursor-pointer text-gray-400 hover:text-red-400" />
        </button>

        <button className="flex flex-col items-center">
          <IoChatbubbleOutline className="h-6 w-6 cursor-pointer text-gray-400 hover:text-red-400" />
        </button>

        <button className="space-4 flex flex-col items-center">
          <VscAccount className="h-6 w-6 cursor-pointer text-gray-400 hover:text-red-400" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
