import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

import Home from "./components/Home";
import Signup from "./components/SIgnup";
import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
