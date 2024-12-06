const Cards = ({ imageSrc, profilePicSrc }) => {
  return (
    <div className="mt-6 relative">
      <img className="w-full rounded-lg object-cover" src={imageSrc} alt="" />
      <div className="absolute left-3 bottom-4 flex gap-2">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src={profilePicSrc}
          alt=""
        />
        <div className="text-white">
          <h4 className="text-sm"> John Doe</h4>
          <p className="text-xs">Lorem ipsum dolor.</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
