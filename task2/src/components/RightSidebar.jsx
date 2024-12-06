import Cards from "./Cards";

const RightSidebar = () => {
  return (
    <div className="w-64 bg-white p-4 mb-6 rounded-lg">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-md cursor-pointer">Artists</h4>
          <h4 className="text-md text-gray-700 cursor-pointer">
            Photographers
          </h4>
        </div>
        {/* cards */}
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>
      </div>
    </div>
  );
};

export default RightSidebar;
