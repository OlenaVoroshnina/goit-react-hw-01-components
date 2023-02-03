import PropTypes from "prop-types";
import css from '../TransactionHistory/TransactionHistory.module.css';
import TransactionHistoryItem from '../TransactionHistory/TransactionHistoryItem';

export default function TransactionHistory({items}) {
    return(
        <table className={css.table}>
            <thead className={css.thead}>
                <tr>
                    <th className={css.theadTitle}>Type</th>
                    <th className={css.theadTitle}>Amount</th>
                    <th className={css.theadTitle}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    return(
                        <TransactionHistoryItem 
                            key={item.id}
                            type = {item.type} 
                            amount = {item.amount} 
                            currency = {item.currency}
                        />
                    )
                })}
            </tbody>
        </table>
    )
};

TransactionHistory.propTypes ={
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
};