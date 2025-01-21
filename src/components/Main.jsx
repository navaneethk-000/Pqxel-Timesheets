import { useState } from "react";

function Main() {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleAddRow = () => {
    const lastRow = rows[rows.length - 1] || {};
    const newRow = {
      meetingDate: lastRow.meetingDate || "",
      activityDate: lastRow.activityDate || "",
      startTime: lastRow.endTime || "",
      endTime: "",
      totalMinutes: 0,
      workType: "",
      comments: "",
    };
    setRows([...rows, newRow]);
  };

  const handleCopyRows = () => {
    const copiedRows = selectedRows.map((index) => ({ ...rows[index] }));
    setRows([...rows, ...copiedRows]);
  };

  const handleDeleteRows = () => {
    setRows(rows.filter((_, index) => !selectedRows.includes(index)));
    setSelectedRows([]);
  };

  const handleCheckboxChange = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handleChange = (index, field, value) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );

    if (field === "startTime" || field === "endTime") {
      const start = new Date(`1970-01-01T${updatedRows[index].startTime}`);
      const end = new Date(`1970-01-01T${updatedRows[index].endTime}`);
      const duration = (end - start) / 60000;
      updatedRows[index].totalMinutes = Math.max(0, duration);
    }

    setRows(updatedRows);
  };

  const calculateTotalTimeByDate = () => {
    const totalsByDate = rows.reduce((acc, row) => {
      if (row.activityDate) {
        acc[row.activityDate] = (acc[row.activityDate] || 0) + row.totalMinutes;
      }
      return acc;
    }, {});

    return totalsByDate;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header Section */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <h1 className="text-2xl font-bold mb-2">Timesheet &gt; Moin &gt; Edit</h1>
        <p className="text-gray-600 mb-2">
          Assigned Tickets: 48 | Moved Tickets: 20
        </p>
      
        {Object.entries(calculateTotalTimeByDate()).map(([date, total]) => (
              // <li key={date} className="text-gray-700">
              //   {date}: {total} min
              // </li>
              <p key={date} className="text-lg font-medium"> Total Time: Today - {total} | This Week - 20 Hrs | This Month(Till Date) - 240 Hrs</p>
            ))}
          {/* Total Time: Today - 120 Min | This Week - 20 Hrs | This Month(Till Date) - 240 Hrs */}
        
      </div>

      {/* Table Section */}
      <div className="bg-white rounded shadow p-4">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-blue-100">
              <th className="border px-4 py-2">Select</th>
              <th className="border px-4 py-2">Meeting Date</th>
              <th className="border px-4 py-2">Activity Date</th>
              <th className="border px-4 py-2">Time Start</th>
              <th className="border px-4 py-2">Time End</th>
              <th className="border px-4 py-2">Total Time</th>
              <th className="border px-4 py-2">Work Type</th>
              <th className="border px-4 py-2">Comment</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="even:bg-gray-50">
                <td className="border px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="date"
                    value={row.meetingDate}
                    onChange={(e) => handleChange(index, "meetingDate", e.target.value)}
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="date"
                    value={row.activityDate}
                    onChange={(e) => handleChange(index, "activityDate", e.target.value)}
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="time"
                    value={row.startTime}
                    onChange={(e) => handleChange(index, "startTime", e.target.value)}
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="time"
                    value={row.endTime}
                    onChange={(e) => handleChange(index, "endTime", e.target.value)}
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="border px-4 py-2 text-center">
                  {row.totalMinutes} min
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    value={row.workType}
                    onChange={(e) => handleChange(index, "workType", e.target.value)}
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    value={row.comments}
                    onChange={(e) => handleChange(index, "comments", e.target.value)}
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total Time by Date Section */}
          {/* <div className="mt-4">
            
            <ul className="list-disc list-inside bg-gray-50 p-4 rounded">
              {Object.entries(calculateTotalTimeByDate()).map(([date, total]) => (
                <li key={date} className="text-gray-700">
                  {date}: {total} min
                </li>
              ))}
            </ul>
          </div> */}

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={handleAddRow}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Row
          </button>
          {selectedRows.length > 0 && (
            <>
              <button
                onClick={handleCopyRows}
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
              >
                Copy
              </button>
              <button
                onClick={handleDeleteRows}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </>
          )}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;