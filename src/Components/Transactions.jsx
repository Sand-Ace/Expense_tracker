import { useContext } from "react";
import { GlobalContext } from "../store/GlobalContext";
import TransactionList from "./Transactionslist";

export default function Transactions() {
  const { transactions, handleDeleteTransaction } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions &&
          transactions.map((transaction) => (
            <TransactionList
              key={transaction.id}
              transaction={transaction}
              onDelete={handleDeleteTransaction}
            />
          ))}
        {transactions.length === 0 && <p>There is no transactions yet.</p>}
      </ul>
    </>
  );
}
