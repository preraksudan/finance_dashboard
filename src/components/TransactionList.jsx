export default function TransactionList({ transactions }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th scope="col" className="p-2 sm:p-3">Type</th>
            <th scope="col" className="p-2 sm:p-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="2" className="p-3 text-center text-gray-400">
                No transactions yet
              </td>
            </tr>
          ) : (
            transactions.map((t, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-gray-900 text-white" : "bg-gray-800 text-white"}
            >
              <td className="p-2 sm:p-3 capitalize">{t.type}</td>
              <td
                className={`p-2 sm:p-3 text-right ${
                  t.type === "income" ? "text-green-400" : "text-red-400"
                }`}
              >
                ₹{Number(t.amount).toFixed(2)}
              </td>
            </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
