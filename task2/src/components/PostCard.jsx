import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { SlDislike } from "react-icons/sl";
import { FaRegShareFromSquare } from "react-icons/fa6";

const PostCard = ({post}) => {
  return (
    <div className="bg-white p-4 mb-6 rounded-lg">
    {/* top */}
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <img
            className="rounded-full w-14 h-14 object-cover border border-gray-500"
            src={post.avatar}
            alt="hero image"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold">{post.name}</h1>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <BsThreeDotsVertical size={22} className="text-gray-600 cursor-pointer" />
      </div>
      <p className="text-gray-800 font-normal">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, cupiditate excepturi? Debitis, tenetur aliquam ex rem recusandae explicabo qui voluptatem. Tenetur amet cum aperiam corrupti culpa animi itaque quos aspernatur.
      </p>
    </div>
    {/* center */}
    <div className="my-10">
      <img
        className="w-full h-[400px] rounded-md shadow-lg hover:scale-105 transition duration-200"
        src={post.image}
        alt="hero image"
      />
    </div>
    {/* bottom */}
    <div className="flex items-center gap-4">
      <div className="flex gap-2 items-center">
        <AiOutlineLike size={24} className="cursor-pointer"/>
        <span className="text-sm font-medium">5.2K</span>
      </div>
      <div className="flex gap-2 items-center">
        <SlDislike size={24} className="cursor-pointer"/>
        <span className="text-sm font-medium">1.1K</span>
      </div>
      <div className="flex gap-2 items-center ">
        <FaRegShareFromSquare size={24} className="cursor-pointer"/>
        <span className="text-sm font-medium">2.2K</span>
      </div>
    </div>
  </div>
  )
}

export default PostCard
