import { useContext } from "react";
import { GlobalContext } from "../store/GlobalContext";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = Number(
    amounts.reduce((acc, amount) => (acc += amount), 0)
  ).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
}
