import React, { useState, useContext } from "react";
import { verifyUser } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { setUser: setAuthUser } = useContext(AuthContext); 
  const navigate = useNavigate();

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await verifyUser(user);

    if (response) {
      const userData = { email: user.email, token: response }; 
      sessionStorage.setItem("User", JSON.stringify(userData));
      axios.defaults.headers.common["Authorization"] = `Bearer ${response}`;
      
      setAuthUser(userData);
      console.log(typeof(userData.token)) ;
      
      navigate("/");
    } else {
      alert("Login Failed!");
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              placeholder="JohnSmith1@gmail.com"
              onChange={handleChange}
              name="email"
              required
              maxLength={40}
              id="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              placeholder="Password"
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              required
              autoComplete="current-password"
              className="block w-full rounded-md px-3 py-1.5 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
            />
          </div>

          <button type="submit" className="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-white font-semibold hover:bg-indigo-500">
            Sign in
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:text-indigo-500 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
