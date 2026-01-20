import React, { createContext, useState } from "react";
export const AuthContext = createContext();
const AuthProvier = ({ children }) => {
  const [user, setUser] = useState({
    name: "hablu mia",
    email: "hablu@mia.com",
  });
  const authData = {
    user,
    setUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvier;
