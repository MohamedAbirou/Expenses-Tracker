import "./App.css";
import {
  Header,
  Balance,
  IncomeExpenses,
  TransactionList,
  AddTransaction,
} from "./components";
import { GLobalProvider } from "./context/GLobalState";

function App() {
  return (
    <GLobalProvider>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </GLobalProvider>
  );
}

export default App;
