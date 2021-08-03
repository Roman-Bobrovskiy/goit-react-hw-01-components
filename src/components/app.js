import React from 'react';
import Profile from './profile/profile';
import Statistic from './statistics/statistic';

import userData from '../json/user.json';
import statisticData from '../json/statistical-data.json';

let App = () => {
    return (
        <div>
            <Profile
                src={userData.avatar}
                name={userData.name}
                tag={userData.tag}
                location={userData.location}
                followersLable="Followers "
                followers={userData.stats.followers}
                viewsLable="Views "
                views={userData.stats.views}
                likesLable="Likes "
                likes={userData.stats.likes}
            />
            <Statistic stats={statisticData} title="Upload stats" />
        </div>
    );
};
export default App;
