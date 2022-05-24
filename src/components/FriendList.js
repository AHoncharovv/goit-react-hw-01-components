import PropTypes from 'prop-types';
import friends from '../friends.json';

function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <li className="item" key={friend.id}>                  
                    {friend.isOnline ? <span className="status"></span> : <span className="statusOffline"></span>}
                    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p className="name"> {friend.name} </p>
                </li>
            ))}
 
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
};

export default FriendList;