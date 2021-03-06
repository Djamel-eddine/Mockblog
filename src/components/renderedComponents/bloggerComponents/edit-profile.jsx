// @flow
import React from "react";
import "./style/css/editprofile.css";

//images and shape
import profile_pic from "../../resources/images/profile.png";
import outline_rectangle from "./resources/shapes/outline_rectangle.svg";

const EditProfile = (props: any) => {
  return (
    <div className="edit-main-container">
      <img className="shape shape1" src={outline_rectangle} alt="shape1" />
      <img className="shape shape2" src={outline_rectangle} alt="shape3" />

      <div className="edit-container">
        <div className="header">
          <h2>Edit Profile</h2>
        </div>
        <div className="body">
          <div className="profile-pic">
            <img src={profile_pic} alt="profile-pic" />
            <h2>ghadj</h2>
            <h2>Change Profile Picture</h2>

            {/* <input type="file" name="pic" id="pic" />
            <label htmlFor="pic">Change Profile Picture</label> */}
          </div>
          <form method="post">
            <label className="firstname" htmlFor="firstname">
              First name
              <br />
              <input type="text" name="firstname" id="firstname" />
            </label>
            <label className="firstname" htmlFor="lastname">
              Last name
              <br />
              <input type="text" name="lastname" id="lastname" />
            </label>
            <label className="username" htmlFor="username">
              User name
              <br />
              <input type="text" name="username" id="username" />
            </label>
            <label className="birthday" htmlFor="birthday">
              Birthday
              <br />
              <input type="date" name="birthday" id="birthday" />
            </label>

            <label className="row" htmlFor="email">
              Email
              <br />
              <input type="email" name="email" id="email" />
            </label>
            <label className="row" htmlFor="password">
              Password
              <br />
              <input type="password" name="password" id="password" />
            </label>
            <label className="row" htmlFor="confirmpassword">
              Confirm Password
              <br />
              <input
                type="password"
                name="confirm password"
                id="confirm password"
              />
            </label>
            <input className="btn1" type="submit" value="Save" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
