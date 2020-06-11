import React from 'react';
import PostBody from './resources/PostBody'
import ProfileCard from './resources/ProfileCard'

function SeeMoreComp(props)
{
    return (
        <div className="saved-posts-container">
            <div className="header">
                <h1>See More</h1>
            </div>
            <div className="body">
                <div className="line"></div>

                {/*TODO
                    1-get the data
                    2- map through the whole data
                    3- display the data into wrappers
                */
                }
                <div className="sub-container">
                    <div className="wrapper">
                        <ProfileCard />
                        <PostBody />
                    </div>
                    <div className="wrapper">
                        <ProfileCard />
                        <PostBody />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default SeeMoreComp;