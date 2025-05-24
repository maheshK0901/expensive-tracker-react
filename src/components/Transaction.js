import React from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = React.useContext(GlobalContext);
  return (
    <li key={transaction.id} className={transaction.amount > 0 ? 'plus' : 'minus'}>
            {transaction.text} <span>{transaction.amount > 0 ? '+' : '-'} Rs. {Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  )
}
