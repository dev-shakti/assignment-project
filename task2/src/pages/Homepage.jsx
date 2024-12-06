import LeftSIdebar from "../components/LeftSIdebar";
import Main from "../components/Main";
import RightSidebar from "../components/RightSidebar";

const Homepage = () => {
  return (
    <div className="mt-8">
      <div className="max-w-6xl mx-auto flex gap-10">
        <LeftSIdebar />
        <Main />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Homepage;
