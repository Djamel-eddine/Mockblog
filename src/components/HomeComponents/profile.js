import React, { useContext } from "react";
import { UserContext } from "./resources/userContext";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faAngellist } from "@fortawesome/free-brands-svg-icons";
import Post from "./Post";
import "./style/myprofile.css";
library.add(faAngellist);

const Profile = () => {
  const { user, islogged } = useContext(UserContext);
  const [userInf, setuserInf] = user;
  /*  const [logged, setlogged] = islogged; */

  return (
    <div className="main-profile-container">
      <div className="profile-container">
        <button className="btn2 addingpost">Add post</button>
        <div className="my-infos">
          <div className="header">
            <img src="" alt="profile" />
            <h1>{userInf["username"]}</h1>
          </div>
          <div className="body">
            <h2>{userInf["profile"]["firstname"]}</h2>
            <ul className="blog-infos">
              <li>posts: {userInf["profile"]["posts"].length}</li>
              <li>Followers: {userInf["profile"]["followers"].length}</li>
              <li>Following: {userInf["profile"]["follows"].length}</li>
            </ul>
          </div>
          <Link id="link" to={`/edit_profile/user=${userInf["username"]}`}>
            <button className="btn1">Edit Profile</button>
          </Link>
        </div>
        <div className="posts-area">
          <div className="header">
            <button className="toposts">Posts</button>
            <button className="tosaved">Saved</button>
          </div>
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Profile;
