import PropTypes from 'prop-types';

function Profile({ username = "Unknown", tag, location, avatar, stats }) {
    return (<div className="profile">

            <div className="description">
                <img
                src={avatar}
                alt="User avatar" 
                className="avatar"
                />
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
                </li>
                <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
            </div>)
    
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats:PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;

// {
//   "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// }

// username — имя пользователя
// tag — тег в социальной сети без @
// location — город и страна
// avatar — ссылка на изображение
// stats — объект с информацией об активности

