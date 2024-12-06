import { BiSearch } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
const Header = () => {
  return (
    <div className="mt-8">
      <div className="max-w-6xl mx-auto  h-14 flex gap-10">
        <div className="w-64 bg-white rounded-md p-3">
          <h1 className="text-2xl font-light uppercase">Logo</h1>
        </div>
        <div className="flex-1 flex items-center gap-4 bg-white rounded-md p-3 text-gray-500">
          <BiSearch size={28} />
          <input
            type="text"
            placeholder="Search here"
            className="w-full border-none outline-none"
          />
          <div className="flex items-center gap-2 text-gray-500">
            <FiFilter size={20} />
            Filters
          </div>
        </div>
        <div className="w-64 rounded-md p-3 bg-[#70bedb] text-white flex items-center justify-center">
          <h1 className="font-light text-md">Become a Seller</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
