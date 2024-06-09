import React, { createContext, useCallback, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const updateUser = useCallback(
    (newUser) => {
      setUser(newUser);
    },
    [setUser]
  );
  // if (Object.keys(user).length !== 0) {
  //   console.log("User is online at this moment");
  // }
  return (
    <UserContext.Provider value={{ user, updateUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
