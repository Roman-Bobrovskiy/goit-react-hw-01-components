import React from 'react';
import PropTypes from 'prop-types';

import styles from './frendlist.module.css';

let FrendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
                <li key={friend.id} className={styles.item}>
                    <span
                        className={
                            friend.isOnline ? styles.onLine : styles.offLine
                        }
                    >
                        {friend.isOnline ? 'Online' : 'Offline'}
                    </span>
                    <img
                        className={styles.avatar}
                        src={friend.avatar}
                        alt={friend.name}
                        width={48}
                    />
                    <p className={styles.name}>{friend.name}</p>
                </li>
            ))}
        </ul>
    );
};
export default FrendList;

// console.log(PropTypes);
FrendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ),
};
