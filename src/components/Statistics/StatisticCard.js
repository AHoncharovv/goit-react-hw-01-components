import PropTypes from 'prop-types';

function StatisticCard({ label, percentage }) {
    return (
        <>
            <span className="label"> {label} </span>
            <span className="percentage"> {percentage} %</span>
        </>     
    )
};

StatisticCard.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatisticCard;