import React from 'react';
import PropTypes from 'prop-types';

import styles from './statistic.module.css';

let Statistic = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.statList}>
                {stats.map(stats => (
                    <li key={stats.id} className={styles.item}>
                        <span className={styles.label}>
                            Doctype: {stats.label}
                        </span>
                        <span className={styles.percentage}>
                            {' '}
                            {stats.percentage}%
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};
export default Statistic;

Statistic.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
};
