import "./App.css";
import AddNewTransaction from "./Components/AddNewTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncomeExpenses from "./Components/IncomeExpenses";
import Transactions from "./Components/Transactions";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Transactions />
        <AddNewTransaction />
      </div>
    </div>
  );
}

export default App;
