import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import {Transaction} from './Transaction';

export const History = () => {
  const {transactions} = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction  key={transaction.id} transaction={transaction}/>
        ))}
      </ul>
    </div>
  )
}
