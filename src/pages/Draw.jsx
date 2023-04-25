import React from 'react';

function ExpenseTracker({ expenses, budget }) {
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remainingBudget = budget - totalExpenses;

  const calculatePercentage = (value) => {
    const percentage = (value / budget) * 100;
    return percentage.toFixed(2);
  };

  const renderExpenses = () => {
    return expenses.map((expense, index) => {
      return (
        <div className="expense" key={index}>
          <div className="expense-description">{expense.description}</div>
          <div className="expense-amount">{expense.amount}</div>
        </div>
      );
    });
  };

  return (
    <div className="expense-tracker">
      {/* <div className="expense-list">{renderExpenses()}</div> */}
      <div className="circular-chart">
        <div className="circle-bg"></div>
        <div
          className="circle-fill"
          style={{ transform: `rotate(${calculatePercentage(totalExpenses)}deg)` }}
        ></div>
        <div
          className="circle-fill"
          style={{ transform: `rotate(${calculatePercentage(totalExpenses)}deg)` }}
        ></div>
        <div className="circle-mask"></div>
        <div className="circle-text">{`${calculatePercentage(
          remainingBudget
        )}%`}</div>
         <div className="circle-text">{`${calculatePercentage(
          remainingBudget
        )}%`}</div>
         <div className="circle-text">{`${calculatePercentage(
          remainingBudget
        )}%`}</div>
      </div>
      {/* <div className="budget-info">
        <div className="budget-title">Budget</div>
        <div className="budget-amount">{budget}</div>
      </div> */}
    </div>
  );
}

export default ExpenseTracker;
