export default function TransactionList({ transaction, onDelete }) {
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => {
          onDelete(transaction.id);
        }}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}
