import { FaHome, FaBell, FaShoppingBag, FaWallet, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";

const LeftSIdebar = () => {
  return (
    <div className="w-64 bg-white h-[600px] p-4 rounded-md flex flex-col justify-between">
      {/* Sidebar Menu */}
      <ul className="space-y-4 flex-1">
        {/* Home */}
        <li className="flex items-center gap-3 cursor-pointer text-gray-700">
          <FaHome size={20} />
          <span className="text-sm font-medium">Home</span>
        </li>

        {/* Notifications */}
        <li className="flex items-center gap-3 cursor-pointer text-gray-500">
          <FaBell size={20} />
          <span className="text-sm font-medium">Notifications</span>
        </li>

        {/* Shop */}
        <li className="flex items-center gap-3 cursor-pointer text-gray-500">
          <FaShoppingBag size={20} />
          <span className="text-sm font-medium">Shop</span>
        </li>

        {/* Wallet */}
        <li className="flex items-center gap-3 cursor-pointer text-gray-500">
          <FaWallet size={20} />
          <span className="text-sm font-medium">Wallet</span>
        </li>

        {/* Subscriptions */}
        <li className="flex items-center gap-3 cursor-pointer text-gray-500">
          <MdSubscriptions size={20} />
          <span className="text-sm font-medium">Subscriptions</span>
        </li>

        {/* My Profile */}
        <li className="flex items-center gap-3 cursor-pointer text-gray-500">
          <FaUser size={20} />
          <span className="text-sm font-medium">My Profile</span>
        </li>

        {/* Settings */}
        <li className="flex items-center gap-3 cursor-pointer text-gray-500">
          <FaCog size={20} />
          <span className="text-sm font-medium">Settings</span>
        </li>
      </ul>
      <div className="mt-4">
        <li className="flex items-center gap-3 cursor-pointer text-gray-500">
          <FaSignOutAlt size={20} />
          <span className="text-sm font-medium">Logout</span>
        </li>
      </div>
    </div>
  )
}

export default LeftSIdebar
