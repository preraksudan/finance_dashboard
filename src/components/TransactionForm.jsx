// components/TransactionForm.jsx
import { useState } from "react";

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({ type: "income", amount: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || parseFloat(form.amount) <= 0) return;
    onAdd({ ...form, amount: parseFloat(form.amount) });
    setForm({ type: "income", amount: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 p-4 sm:p-6 shadow-lg rounded-lg flex flex-col sm:flex-row gap-4 text-white"
    >
      {/* Type Selector */}
      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
        className="bg-gray-800 border border-gray-700 rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* Amount Input */}
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="bg-gray-800 border border-gray-700 rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        min="0"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex-shrink-0 transition duration-200"
      >
        Add
      </button>
    </form>
  );
}
