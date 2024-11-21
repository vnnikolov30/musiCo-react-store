import React from "react";
import { createUser } from "../../api/api";
import { useState } from "react";
function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let response = await createUser(user);
    if (response.status !== 200) {
      alert("User could not be created :((");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder={"Username"}
        onChange={handleChange}
        name="name"
        required
        maxLength={20}
      />
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
      <button type="submit">Create account</button>
    </form>
  );
}

export default SignUp;
