// components/SummaryCards.jsx
export default function SummaryCards({ balance, income, expense }) {
  const cards = [
    { title: "Balance", value: balance, color: "bg-blue-500" },
    { title: "Income", value: income, color: "bg-green-500" },
    { title: "Expense", value: expense, color: "bg-red-500" },
  ];

  return (
    <>
      {cards.map((card) => (
        <div
          key={card.title}
          className={`p-4 rounded-lg text-white shadow ${card.color} flex flex-col items-center justify-center`}
        >
          <p className="text-sm uppercase tracking-wide">{card.title}</p>
          <p className="text-2xl font-bold mt-1">₹{card.value.toFixed(2)}</p>
        </div>
      ))}
    </>
  );
}
