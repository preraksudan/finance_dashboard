import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";


export default function App() {

    // Theme toggle ..
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
      setTheme(prev => prev === "light" ? "dark" : "light");
    };


    // Load transactions from localStorage when the app starts
    const [transactions, setTransactions] = useState(() => {
      const saved = localStorage.getItem("transactions");
      return saved ? JSON.parse(saved) : [];
    });

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + parseFloat(t.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + parseFloat(t.amount), 0);

  const balance = income - expense;


    // Save to localStorage whenever transactions change
    useEffect(() => {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    // persist theme in local storage...
    useEffect(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) setTheme(savedTheme);
    }, []);
    
    useEffect(() => {
      localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
      document.body.className = theme;
    }, [theme]);
    


    return (
        <div
          className={`min-h-screen flex flex-col ${
            theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
          }`}
        >

        <button onClick={toggleTheme} className="px-4 py-2 rounded border">
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>

        {/* Navbar */}
        <Navbar />
  
        {/* Main content container */}
        <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1">
          {/* Summary cards - grid for responsiveness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <SummaryCards balance={balance} income={income} expense={expense} />
          </div>
  
          {/* Transaction form */}
          <div className="mb-6">
            <TransactionForm onAdd={addTransaction} />
          </div>
  
          {/* Transaction list */}
          <div className="bg-white shadow rounded-lg p-4 sm:p-6">
            <TransactionList transactions={transactions} />
          </div>
        </main>
      </div>
    );
}