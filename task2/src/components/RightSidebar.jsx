import Cards from "./Cards";

const RightSidebar = () => {
  const cardData = [
    {
      imageSrc: "https://cdn.pixabay.com/photo/2023/05/10/19/18/sparrow-7984807_640.jpg",
      profilePicSrc: "https://picsum.photos/id/211/200/200",
    },
    {
      imageSrc: "https://cdn.pixabay.com/photo/2023/05/10/19/18/sparrow-7984807_640.jpg",
      profilePicSrc: "https://picsum.photos/id/223/200/200",
    },
    {
      imageSrc: "https://cdn.pixabay.com/photo/2023/05/10/19/18/sparrow-7984807_640.jpg",
      profilePicSrc: "https://picsum.photos/id/201/200/200",
    },
    // Add more data as needed
  ];
  return (
    <div className="w-64 bg-white p-4 mb-6 rounded-lg h-screen overflow-hidden">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-md cursor-pointer">Artists</h4>
          <h4 className="text-md text-gray-700 cursor-pointer">
            Photographers
          </h4>
        </div>
        {/* cards */}
        {cardData.map((card, index) => (
          <Cards
            key={index}
            imageSrc={card.imageSrc}
            profilePicSrc={card.profilePicSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
