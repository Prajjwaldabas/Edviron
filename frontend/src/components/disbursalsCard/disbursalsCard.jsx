import React from "react";
import "./disbursals.css";

import pendingCircle from "../../Assets/images/pending.svg";
import successCircle from "../../Assets/images/success.svg";
const disbursalsCard = ({transactionsThisMonth}) => {
  return (
    <div className="disbursal-container">
      <p className="admin-heading">Disbursals</p>

      <div className="flex w-100 jcsa aic">
        <p className="greyText">Date</p>
        <p className="greyText">Amount</p>
        <p className="greyText">Status</p>
      </div>

      <div className="scroll-container">
        <div className="scrollable-content">

        {transactionsThisMonth.map((transaction, index) => {
  const createdAt = new Date(transaction.createdAt);
  const formattedDate = createdAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex jcsa aic">
      <p className="admin-names">{formattedDate}</p>
      <p className="admin-names">₹{transaction.amount.toFixed(2)}</p>
      <div className="flex">
      <span>
  <img
    src={transaction.status === 'SUCCESS' ? successCircle : pendingCircle}
    alt=""
  />
</span>

        <p className="admin-names">{transaction.status}</p>
      </div>
    </div>
  );
})}
          
            
          </div>
          
          
        </div>
      </div>
    
  );
};

export default disbursalsCard;
