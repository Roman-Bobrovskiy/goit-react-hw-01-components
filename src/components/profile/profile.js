import React from 'react';
import PropTypes from 'prop-types';

import styles from './profile.module.css';

let Profile = ({
    src,
    name,
    tag,
    location,
    followers,
    followersLable,
    viewsLable,
    views,
    likesLable,
    likes,
}) => {
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img src={src} alt="avatar" className={styles.avatar} />
                <p className={styles.cartText}>Name: {name}</p>
                <p className={styles.cartText}>Tag: {tag}</p>
                <p className={styles.cartText}>Location: {location}</p>
            </div>
            <ul className={styles.stats}>
                <li>
                    <span className={styles.label}>{followersLable}</span>
                    <span className={styles.quantity}>{followers}</span>
                </li>
                <li>
                    <span className={styles.label}>{viewsLable}</span>
                    <span className={styles.quantity}>{views}</span>
                </li>
                <li>
                    <span className={styles.label}>{likesLable}</span>
                    <span className={styles.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
};
export default Profile;

Profile.defaultProps = {
    src: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    name: 'please enter the name',
    location: 'please enter the location',
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    src: PropTypes.string,
    tag: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};
