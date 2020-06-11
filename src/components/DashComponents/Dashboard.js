import React from 'react';
import { UserContext } from "../resources/states/userContext";
import Topics from './Topics'
import SavedTopicsComp from './SavedTopicsComp'
import LatestPostsComp from './LatestPostsComp'
import SeeMoreComp from './SeeMoreComp'
import './resources/styles/dashboard.scss';



function Dashboard(props)
{
    return (
        <div className="dash-container">
            <section className="topics-sec">
                <Topics />
            </section>
            <section className="saved-topics-sec">
                <SavedTopicsComp />
            </section>
            <section className="latest-posts-sec">
                <LatestPostsComp />
            </section>
            <section className="seemore-sec">
                <SeeMoreComp />
            </section>

        </div>
    );
}

export default Dashboard;