import React from "react";
import Header from "./components/Header";
import "./App.css";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <>
      <div>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
      </div>
    </>
  );
}

export default App;
