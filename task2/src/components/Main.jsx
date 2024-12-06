import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    name: "John Doe",
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiSzpu_kFACumUJJLgGrWSV6KXEA3VS83sMA&s",
    image:
      "https://cdn.pixabay.com/photo/2024/02/14/16/53/night-8573855_640.jpg",
  },
  {
    id: 1,
    name: "Will Young",
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_JP3p8M52qy4TQGX6-OEwiikpxjc-hiJIA&s",
    image:
      "https://cdn.pixabay.com/photo/2023/03/13/18/33/basket-7850546_640.jpg",
  },
  {
    id: 1,
    name: "Ryan Harris",
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQegXC8BIRrKyDHFI5ar9ro43ApUqwAqBQbjw&s",
    image:
      "https://cdn.pixabay.com/photo/2023/05/10/19/18/sparrow-7984807_640.jpg",
  },
];

const Main = () => {
  return (
    <div className="w-48 flex-1 min-h-screen">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Main;
