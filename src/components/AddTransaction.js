import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState"; 
import React from 'react'

export default function AddTransaction() {
    const { addTransaction } = React.useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();
    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        setText('');
        setAmount('');
    }

  return (
    <div>
       <h3>Add new transaction</h3>
       <form onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...' />
        </div>
        <div className="form-control">
            <label htmlFor="amount">Amount <br />(negative - expense, positive -income)</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' />
        </div>
        <button className="btn">Add transaction</button>
       </form>
    </div>
  )
}
