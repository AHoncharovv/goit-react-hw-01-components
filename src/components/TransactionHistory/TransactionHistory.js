import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'

function TransactionHistory({ items }) {
    return (
        <div className={styles.transitionSection}>
            <table className="transaction-history">
            <thead className={styles.tHead}>
                <tr>
                    <th className={styles.table}>Type</th>
                    <th className={styles.table}>Amount</th>
                    <th className={styles.table}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr className={styles.tBody} key={item.id}>
                    <td className={styles.table}>{item.type}</td>
                    <td className={styles.table}>{item.amount}</td>
                    <td className={styles.table}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
};

TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}

export default TransactionHistory;