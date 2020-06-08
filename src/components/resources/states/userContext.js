import { createContext, useState } from "react";
import React from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [islogged, setislogged] = useState(false);
  const [Token, setToken] = useState("");
  const [user, setuser] = useState({
    _id: null,
    username: "",
    email: "",
    password: "",
    is_active: false,
    is_blogger: false,
    __v: null,

    profile: {
      firstname: "",
      lastname: "",
      date_of_birth: "",
      bio: "",
      followers: [],
      follows: [], //added
      posts: [],
      specializations: [],
    },
    created_at: "",
    updated_at: "",
  });
  const [Posts, setPosts] = useState([]);
  return (
    <UserContext.Provider
      value={{
        user: [user, setuser],
        islogged: [islogged, setislogged],
        token: [Token, setToken],
        posts: [Posts, setPosts],
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

/* const a = {
  email: "djamelmahrougui@gmail.com",
  is_active: true,
  is_blogger: false,
  password: "$2b$10$rC//CbR.faXGb0nZs85Y7uH/EojjPqoYcOlCBqOaDH0hLSdnu4FUK",
  profile: {
    followers: Array(0),
  },
  updated_at: "2020-06-02T20:47:20.880Z",
  username: "Djamel",
  __v: 0,
  _id: "5ed6bf78d513b40017912090",
}; */
