import { MdOutlineNotificationsNone } from "react-icons/md";

const Header = () => {
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="font-manrope text-2xl font-bold text-black">
          FamilyFriends
        </h1>
        <div className="relative">
          <MdOutlineNotificationsNone className="h-6 w-6 text-gray-700" />
          <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
