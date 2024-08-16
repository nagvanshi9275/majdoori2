

import React, { useState } from "react";
import { account, ID } from "./Appwrite";

export default function Signup1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleRegister = async () => {
    try {
      const response = await account.create(
        ID.unique(),
        email,
        password,
        name
      );
      console.log("User registered successfully:", response);
      // You might want to automatically log the user in or redirect them here
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await account.createEmailSession(email, password);
      console.log("User has been logged in:", response);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <input
        placeholder="Email"
        onChange={handleEmail}
        type="email"
        value={email}
      />
      <input
        placeholder="Password"
        onChange={handlePassword}
        type="password"
        value={password}
      />
      <input
        placeholder="Name"
        onChange={handleName}
        type="text"
        value={name}
      />
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}






