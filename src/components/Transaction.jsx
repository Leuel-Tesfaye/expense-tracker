import React from "react";

function Transaction({ transaction }) {
  // here we can use keyword props and use it props.transaction.text but not we destructure it
  return (
    <>
      <li className="minus">
        {transaction.text} <span>-$400</span>
        <button className="delete-btn">X</button>
      </li>
    </>
  );
}

export default Transaction;
