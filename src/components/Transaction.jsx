import React from "react";

function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? "-" : "+";
  // here we can use keyword props and use it props.transaction.text but not we destructure it
  return (
    <>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button className="delete-btn">X</button>
      </li>
    </>
  );
}

export default Transaction;
