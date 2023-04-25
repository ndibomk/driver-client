import React, { useState } from 'react'
import Draw from './Draw';
import ExpenseTracker from './Draw';

const Main = () => {
    const [expenses, setExpenses] = useState([
        { description: 'Groceries', amount: 60 },
        { description: 'Gas', amount: 70 },
        { description: 'Dinner', amount: 20 },
        { description: 'fare', amount: 38 },

        ]);
        const budget = 300;
    return (
        <div className='Main'>
            <div className="main-dash">
            <div className="main-top">
                <h1>Welcome John</h1>
            </div>
            <div className="Middle">
                <div className="middle-left">
                    <h3>Today's Profit</h3>
                    <h1>$448</h1>
                </div>
                <div className="middle-right">
                    <h3>30 Today's Profit</h3>
                    <h1>${448 * 30}</h1>
                </div>
            </div>
            <div className="main-middle">
            <ExpenseTracker expenses={expenses} budget={budget}/>

                <div className="status-draw">
                 <div className="pi">
                 <p>Current Rate</p>
                    </div> 
                </div>
                
                <div className="status-change">
                    <div className="status-items">
                    <p>5%</p>
                    <span>&</span>
                    <p>$2</p>
                    
                    </div>
                    <h1>Top 30%</h1>
                </div>
                
                <h5>Next boost in 30 orders</h5>
                <div className="sttus-content">
                    
                    <h4>Your current rate means you will make an estimate <span>$00</span> per order + tips </h4>
                </div>
            </div>
            <div className="main-bottom">
                <button className="order-button">
                   <h1>New Order</h1> 
                </button>
            </div>
            </div>
        </div>
    )
}

export default Main