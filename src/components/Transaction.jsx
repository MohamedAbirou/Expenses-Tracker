import React, { useContext } from "react";
import { GlobalContext } from "../context/GLobalState";

const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const { id, text, amount } = props.transaction;

  const sign = amount < 0 ? "-" : "+";

  return (
    <li className={`${amount < 0 ? "minus" : "plus"}`}>
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className="delete-btn" onClick={deleteTransaction(id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
