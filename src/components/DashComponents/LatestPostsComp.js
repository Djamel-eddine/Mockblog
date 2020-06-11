import React from 'react';
import PostBody from './resources/PostBody'
function LatestPostsComp(props)
{
    return (
        <div className="latest-posts-container">
            <div className="header">
                <h1>Latest posts</h1>
            </div>
            <div className="body">
                <PostBody />
                <div className="sm-posts">
                    <PostBody />
                    <PostBody />
                </div>
                <div className="line"></div>

            </div>

        </div>
    );
}

export default LatestPostsComp;