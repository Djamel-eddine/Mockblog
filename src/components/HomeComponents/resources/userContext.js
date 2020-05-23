import { createContext, useState } from "react";
import React from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const [User, setUser] = useState({
    username: "",
    email: "",
    password: "",
    is_active: false,
    is_blogger: false,
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
    token: "",
  });
  return (
    <UserContext.Provider value={[User, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
}
