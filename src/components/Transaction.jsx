import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  // here we can use keyword props and use it props.transaction.text but not we destructure it
  return (
    <>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          X
        </button>
      </li>
    </>
  );
}

export default Transaction;
