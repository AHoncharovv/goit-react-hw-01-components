import PropTypes from 'prop-types';
import StatisticCard from './StatisticCard';
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
    return (

        <section className={styles.statistics}>
            {title && <h2 className={styles.title}> {title} </h2>}

            <ul className={styles.statList}>
                {stats.map(stat => <li className={styles.statItem} key={stat.id}>
                    <StatisticCard
                        label={stat.label}
                        percentage={stat.percentage}
                    /> 
                </li> )}   
            </ul>
        </section>
        
    ) 
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats:PropTypes.array.isRequired,
};

export default Statistics;