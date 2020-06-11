import React from 'react';
import PostBody from './resources/PostBody'

function SavedTopicsComp(props)
{
    return (
        <div className="saved-posts-container">
            <div className="header">
                <h1>Saved topics</h1>
            </div>
            <div className="body">
                <div className="line"></div>
                <div className="sm-posts">
                    <PostBody />
                    <PostBody />
                </div>

                <div className="lg-posts">
                    <PostBody />
                </div>
            </div>
        </div>
    );
}

export default SavedTopicsComp;