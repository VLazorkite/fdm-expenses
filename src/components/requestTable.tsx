export default function RequestTable({
  currentTickets,
  status,
}: {
  currentTickets: PayTicket[];
  status: "accepted" | "rejected" | "pending";
}) {
  let colour = "black";
  if (status === "accepted") {
    colour = "light blue";
  } else if (status === "rejected") {
    colour = "red";
  } else if (status === "pending") {
    colour = "yellow";
  }
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className=" overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead className="text-gray-700">
            <tr className="bg-blue-gray-100 ">
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Currency</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Response</th>
            </tr>
          </thead>

          <tbody>
            {currentTickets.map((request, index) => (
              <tr
                key={index}
                className="bg-blue-gray-100 border-b border-blue-gray-200 text-black"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">
                  {request.dateMade.toLocaleDateString()}
                </td>
                <td className="py-3 px-4">{request.amount}</td>
                <td className="py-3 px-4">{request.currency}</td>
                {<td className={"py-3 px-4"}>{request.status}</td>}
                {request.response ? (
                  <td className="py-3 px-4"> {request.response}</td>
                ) : (
                  <td className="py-3 px-4"> N/A </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
