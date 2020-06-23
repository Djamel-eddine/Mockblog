import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../resources/states/userContext";
import { Link } from "react-router-dom";
import Post from "./Post";
import "./style/myprofile.scss";

//images and shapes
import profile_pic from "../../resources/images/profile.png";
import orange_Ellipse from "./resources/shapes/orange_Ellipse.svg";
import outline_rectangle from "./resources/shapes/outline_rectangle.svg";
import axios from "axios";

const Profile = (props) => {
  const { user, posts, token } = useContext(UserContext);
  const [userInf] = user;
  const [Token, setToken] = token;
  const [Posts, setPosts] = posts;
  const [savedPosts, setsavedPosts] = useState([]);
  const [showSavedPosts, setshowSavedPosts] = useState(false);
  /*  const [logged, setlogged] = islogged; */

  useEffect(() => {
    console.log(
      "----------------------- reload again ---------------------------"
    );
    console.log(Token);
    axios
      .get(`http://localhost:5000/api/v1/${userInf["username"]}/posts`, {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then((response) => {
        if (response.status === 200) {
          setPosts(response.data.msgs.posts);

          console.log(response.data.msgs.posts);
        } else {
          alert(response.msgs);
        }
      })
      .catch((e) => {
        console.log("404 status");
      });
  }, []);

  const showSaved = () => {
    setshowSavedPosts(true);
  };
  const showMyPosts = () => {
    setshowSavedPosts(false);
  };
  return (
    <div className="main-profile-container">
      <img className="shape shape1" src={outline_rectangle} alt="shape1" />
      {/*       <img className="shape shape2" src={outline_rectangle} alt="shape3" /> */}
      <img className="shape shape2" src={orange_Ellipse} alt="shape2" />
      <div className="profile-container">
        <div className="addingpost">
          <Link to="/post_editor">
            <button className="btn2">Add post</button>
          </Link>
        </div>

        <div className="my-infos">
          <div className="header">
            <img src={profile_pic} alt="profile" />
            <h1>{userInf["username"]}</h1>
          </div>
          <div className="body">
            <h2>{/* {userInf["profile"]["firstname"]} */} first name</h2>
            <ul className="blog-infos">
              <li>posts: {Posts.length}</li>
              <li>Followers: {userInf["profile"]["followers"].length} </li>
              <li>
                Following: {/* {userInf["profile"]["follows"].length} */} 0
              </li>
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
            <button onClick={showMyPosts} className="toposts">
              Posts
            </button>
            <button onClick={showSaved} className="tosaved">
              Saved
            </button>
          </div>
          <div className="posts">
            {showSavedPosts
              ? savedPosts.map((post, i) => (
                  <Post
                    key={i}
                    id={post["_id"]}
                    title={post.title}
                    desc={post.desc}
                    history={props.history}
                  />
                ))
              : Posts.map((post, i) => (
                  <Post
                    key={i}
                    id={post["_id"]}
                    title={post.title}
                    desc={post.desc}
                    history={props.history}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
