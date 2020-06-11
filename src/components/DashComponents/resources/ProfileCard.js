import React from 'react';
import login_ill from "../../resources/images/profile.png";
function ProfileCard(props)
{
    return (
        <div className="card-container">
            <div className="img-placeholder">
                <img src={login_ill} alt="register" />
            </div>
            <div className="infos-placeholder">
                <h3>full name</h3>
                <div className="content">
                    <h5>followers: 5</h5>
                    <h5>followers: 4</h5>
                </div>
            </div>
            <div className="insights-placeholder">
                <div className="content">
                    <p>icon:</p>

                </div>
                <div className="content">
                    <p>icon:</p>

                </div>
                <div className="content">
                    <p>icon:</p>
                </div>
            </div>

        </div>
    );
}

export default ProfileCard;