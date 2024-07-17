import "./App.css";
import AddNewTransaction from "./Components/AddNewTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncomeExpenses from "./Components/IncomeExpenses";
import Transactions from "./Components/Transactions";
import { GlobalProvider } from "./store/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Transactions />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
