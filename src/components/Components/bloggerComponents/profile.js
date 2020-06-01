import React, { useContext } from "react";
import { UserContext } from "../../resources/states/userContext";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faAngellist } from "@fortawesome/free-brands-svg-icons";
import Post from "./Post";
import "./style/myprofile.css";

//images and shapes
import profile_pic from "../../resources/images/profile.png";
import orange_Ellipse from "./resources/shapes/orange_Ellipse.svg";
import outline_rectangle from "./resources/shapes/outline_rectangle.svg";

library.add(faAngellist);

const Profile = () => {
  const { user, islogged } = useContext(UserContext);
  const [userInf, setuserInf] = user;
  /*  const [logged, setlogged] = islogged; */

  return (
    <div className="main-profile-container">
      <img className="shape shape1" src={outline_rectangle} alt="shape1" />
      {/*       <img className="shape shape2" src={outline_rectangle} alt="shape3" /> */}
      <img className="shape shape2" src={orange_Ellipse} alt="shape2" />
      <div className="profile-container">
        <div className="addingpost">
          <button className="btn2">Add post</button>
        </div>

        <div className="my-infos">
          <div className="header">
            <img src={profile_pic} alt="profile" />
            <h1>{userInf["username"]}</h1>
          </div>
          <div className="body">
            <h2>{userInf["profile"]["firstname"]}</h2>
            <ul className="blog-infos">
              <li>posts: {userInf["profile"]["posts"].length}</li>
              <li>Followers: {userInf["profile"]["followers"].length}</li>
              <li>Following: {userInf["profile"]["follows"].length}</li>
              <li>
                <Link
                  className="ordinary-link"
                  to={`/edit_profile/user=${userInf["username"]}`}
                >
                  Edit Profile
                </Link>
              </li>
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
