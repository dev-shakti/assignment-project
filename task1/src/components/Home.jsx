import { useAuth } from "../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Home = () => {
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Successfully logged out");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };
  return (
    <div className="homepage">
      {currentUser ? (
        <div className="user-info">
          <p>
            Welcome, <span className="user-email">{currentUser.email}</span>
          </p>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <p className="not-logged-in">You are not logged in.</p>
      )}
      <h1 className="homepage-title">Homepage</h1>
    </div>
  );
};

export default Home;
