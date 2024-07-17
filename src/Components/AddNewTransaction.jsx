import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../store/GlobalContext";

export default function AddNewTransaction() {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function onSubmit(event) {
    event.preventDefault();
    let transaction = {
      id: Math.random() * 100,
      text,
      amount: +amount,
    };
    addTransaction(transaction);
    setText("");
    setAmount(0);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            onChange={(event) => setText(event.target.value)}
            value={text}
            type="text"
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            onChange={(event) => setAmount(event.target.value)}
            value={amount}
            type="number"
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
