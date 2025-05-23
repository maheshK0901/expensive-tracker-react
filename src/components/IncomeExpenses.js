import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export default function IncomeExpenses() {
  const { transactions } = React.useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">+Rs. {income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money minus">-Rs. {expense}</p>
        </div>
    </div>
  )
}
