import React from "react";
import { verifyUser } from "../../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let response = await verifyUser(user);
    if(response){
        navigate("/")
        sessionStorage.setItem("User", response)
    }else{
        alert("Login Failed!")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder={"Email"}
        onChange={handleChange}
        name="email"
        required
        maxLength={40}
      />
      <input
        placeholder={"Password"}
        onChange={handleChange}
        type="password"
        name="password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
