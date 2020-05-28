import { createContext, useState } from "react";
import React from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [islogged, setislogged] = useState(true);
  const [user, setuser] = useState({
    id: null,
    username: "ghadj",
    nickname: "", //added
    email: "",
    password: "",
    is_active: false,
    is_blogger: "",
    profile: {
      firstname: "ghadjati",
      lastname: "oussama",
      date_of_birth: "",
      bio: "",
      followers: [],
      follows: [], //added
      posts: [],
      specializations: [],
    },
    created_at: "",
    updated_at: "",
    token: "", //added
  });
  return (
    <UserContext.Provider
      value={{ user: [user, setuser], islogged: [islogged, setislogged] }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
