
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error,setError]=useState("")
  const navigate=useNavigate()

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    setError("");
      await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      alert("Login successful!");
      navigate("/")
      setFormData({
        email: "",
        password: "",
      });
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="container">
      <div className="form-card">
        <h1 className="title">Login</h1>
        {error && <p className="error">*{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-control">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="input-control">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="text">
          Dont have account{" "}
          <Link className="link" to="/auth/signup">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

