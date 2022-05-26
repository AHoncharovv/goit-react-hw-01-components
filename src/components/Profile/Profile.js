import PropTypes from 'prop-types';
import styles from './Profile.module.css';
// console.log(styles);

function Profile({ username = "Unknown", tag, location, avatar, stats: { followers, views, likes } }) {
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img src={avatar} alt="User avatar" className={styles.avatar}/>
                <p className="name">{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>
            <ul className={styles.stats}>
                 <li className={styles.info}>
                    <span className="label">Followers</span>
                    <span className={styles.quantity}>{followers}</span>
                </li>
                <li className={styles.info}>
                    <span className="label">Views</span>
                    <span className={styles.quantity}>{views}</span>
                </li>
                <li className={styles.info}>
                    <span className="label">Likes</span>
                    <span className={styles.quantity}>{likes}</span>
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

