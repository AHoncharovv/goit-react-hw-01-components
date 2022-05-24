import profileData from '../user.json';
import statData from '../data.json';
import friends from '../friends.json'
import Profile from './Profile';
import Statistics from './Statistics'
import FriendList from './FriendList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* React homework template */}

      <Profile
      username={profileData.username}
      tag={profileData.tag}
      location={profileData.location}
      avatar={profileData.avatar}
      stats={profileData.stats}
      />

      <Statistics
        title={"Upload stats"}
        stats={statData}
      />

      <FriendList
        friends={friends}
      />
    </div>
  );
};

    