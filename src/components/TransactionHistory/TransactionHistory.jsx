import css from "./TransactionHistory.module.css";

function capitalize(str) { 
        return str.slice(0,1).toUpperCase() + str.slice(1);
}

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transTable}>
            <thead className={css.transThead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody className={css.transBody}>
                {items.map(item =>
                    <tr key={item.id} className={css.transBodyTr}>
                        <td>{capitalize(item.type)}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default TransactionHistory;