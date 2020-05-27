import { createContext, useState } from "react";
import React from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [User, setUser] = useState({
    id: null,
    username: "djamel",
    email: "",
    password: "",
    is_active: false,
    is_blogger: "",
    profile: {
      firstname: "",
      lastname: "",
      date_of_birth: "",
      bio: "",
      followers: [],
      specializations: [],
    },
    created_at: "",
    updated_at: "",
  });
  return (
    <UserContext.Provider value={[User, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
