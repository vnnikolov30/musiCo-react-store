import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser = sessionStorage.getItem("User");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem("User");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
