import { MdOutlineNotificationsNone } from "react-icons/md";

const Header = () => {
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between">
        <h1 className="font-manrope text-2xl font-bold text-black">
          FamilyFriends
        </h1>
        <div className="relative">
          <MdOutlineNotificationsNone className="h-6 w-6 text-gray-900" />
        </div>
      </div>
    </div>
  );
};

export default Header;
