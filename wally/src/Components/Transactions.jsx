import React from 'react';
import "./css/transaction.css";
import "./css/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Transactions = () => {
  const transactions = [
    {
      type: "Tea",
      amount: "12",
      month: "October",
      date: "14",
      category: "Food & Drink",
      method: "Cash",
      transactionType: "expense",
    },
    {
      type: "Salary",
      amount: "50000",
      month: "October",
      date: "12",
      category: "Income",
      method: "Bank Transfer",
      transactionType: "income",
    },
    {
      type: "Groceries",
      amount: "150",
      month: "October",
      date: "12",
      category: "Food & Drink",
      method: "Credit Card",
      transactionType: "expense",
    },
    {
      type: "Movie Ticket",
      amount: "250",
      month: "October",
      date: "10",
      category: "Entertainment",
      method: "Debit Card",
      transactionType: "expense",
    },

    {
      type: "Fuel",
      amount: "500",
      month: "October",
      date: "9",
      category: "Transport",
      method: "Cash",
      transactionType: "expense",
    },
    {
      type: "Freelance",
      amount: "15000",
      month: "October",
      date: "7",
      category: "Income",
      method: "Cash",
      transactionType: "income",
    },
    {
      type: "Rent",
      amount: "8000",
      month: "October",
      date: "5",
      category: "Housing",
      method: "Bank Transfer",
      transactionType: "expense",
    },
    {
      type: "Electricity Bill",
      amount: "1200",
      month: "October",
      date: "4",
      category: "Utilities",
      method: "Credit Card",
      transactionType: "expense",
    },
    {
      type: "Gym Membership",
      amount: "1000",
      month: "October",
      date: "3",
      category: "Health & Fitness",
      method: "Bank Transfer",
      transactionType: "expense",
    },
    {
      type: "Dinner",
      amount: "600",
      month: "October",
      date: "2",
      category: "Food & Drink",
      method: "Cash",
      transactionType: "expense",
    },
    {
      type: "Books",
      amount: "450",
      month: "October",
      date: "1",
      category: "Education",
      method: "Debit Card",
      transactionType: "expense",
    },
    {
      type: "Online Shopping",
      amount: "2300",
      month: "October",
      date: "1",
      category: "Shopping",
      method: "Credit Card",
      transactionType: "expense",
    },
  ];

  const getCategoryClass = (category) => {
    switch (category) {
      case "Food & Drink":
        return "category-food-drink";
      case "Entertainment":
        return "category-entertainment";
      case "Transport":
        return "category-transport";
      case "Housing":
        return "category-housing";
      case "Utilities":
        return "category-utilities";
      case "Health & Fitness":
        return "category-health-fitness";
      case "Education":
        return "category-education";
      case "Shopping":
        return "category-shopping";
      case "Income":
        return "category-income";
      default:
        return "";
    }
  };

  const transType = (transactionType)=>{
    if(transactionType == "income"){
      return "income"
    }
    else{
      return "expense"
    }
  }

  return (
    <>
      <div className='window'>
        <p style={{ color: "#8183A0", fontWeight: "bold", fontSize: "18px" }}>
          Recent Transactions
        </p>
        <div className='table'>
          <table>
            <thead>
              <tr>
                <th className='th'>Transaction</th>
                <th className='th'>Amount</th>
                <th className='th'>Date</th>
                <th className='th'>Category</th>
                <th className='th'>Method</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td className='td'>{transaction.type}</td>
                  <td className= {`td ${transType(transaction.transactionType)}`}>₹{transaction.amount}</td>
                  <td className='td'>{transaction.month} {transaction.date}</td>
                  <td className='td'>
                    <p className={`category ${getCategoryClass(transaction.category)}`}>{transaction.category}</p>
                  </td>
                  <td className='td'>{transaction.method} <FontAwesomeIcon className='edit' icon={faEdit} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Transactions;
