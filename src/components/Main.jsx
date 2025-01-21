// import { useState } from "react";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { ImBrightnessContrast } from "react-icons/im";
// import { avatar } from "../assets";
// function Main() {
//   const [rows, setRows] = useState([]);
//   const [selectedRows, setSelectedRows] = useState([]);

//   const handleAddRow = () => {
//     const lastRow = rows[rows.length - 1] || {};
//     const newRow = {
//       meetingDate: lastRow.meetingDate || "",
//       activityDate: lastRow.activityDate || "",
//       startTime: lastRow.endTime || "",
//       endTime: "",
//       totalMinutes: 0,
//       workType: "",
//       comments: "",
//     };
//     setRows([...rows, newRow]);
//   };

//   const handleCopyRows = () => {
//     const copiedRows = selectedRows.map((index) => ({ ...rows[index] }));
//     setRows([...rows, ...copiedRows]);
//   };

//   const handleDeleteRows = () => {
//     setRows(rows.filter((_, index) => !selectedRows.includes(index)));
//     setSelectedRows([]);
//   };

//   const handleCheckboxChange = (index) => {
//     if (selectedRows.includes(index)) {
//       setSelectedRows(selectedRows.filter((i) => i !== index));
//     } else {
//       setSelectedRows([...selectedRows, index]);
//     }
//   };

//   const handleChange = (index, field, value) => {
//     const updatedRows = rows.map((row, i) =>
//       i === index ? { ...row, [field]: value } : row
//     );

//     if (field === "startTime" || field === "endTime") {
//       const start = new Date(`1970-01-01T${updatedRows[index].startTime}`);
//       const end = new Date(`1970-01-01T${updatedRows[index].endTime}`);
//       const duration = (end - start) / 60000;
//       updatedRows[index].totalMinutes = Math.max(0, duration);
//     }

//     setRows(updatedRows);
//   };

//   const calculateTotalTimeByDate = () => {
//     const totalsByDate = rows.reduce((acc, row) => {
//       if (row.activityDate) {
//         acc[row.activityDate] = (acc[row.activityDate] || 0) + row.totalMinutes;
//       }
//       return acc;
//     }, {});

//     return totalsByDate;
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* Header Section */}
//       <div className="bg-white p-4 rounded shadow mb-4">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-[24px] font-bold mb-2">
//               Timesheet &gt; Moin &gt; Edit
//             </h1>
//             <p className="text-gray-600 mb-2 text-[20px]">
//               Assigned Tickets: 48 | Moved Tickets: 20
//             </p>
//           </div>
//           <div className="flex items-center gap-6">
//             <div className="w-[48px] h-[49px] text-white text-[25px] rounded-[15px] bg-[#1666FE] flex justify-center items-center"><IoMdNotificationsOutline/></div>
//             <div className="w-[48px] h-[49px] text-white text-[25px] rounded-[15px] bg-[#1666FE] flex justify-center items-center"><ImBrightnessContrast/></div>
//             <div className="rounded-full flex justify-center items-center"><img src={avatar} alt="" /></div>
//           </div>
//         </div>

//         <div className="flex justify-between items-center">
//           <h1 className="text-[40px] font-bold">Moin</h1>
//           <div className="flex gap-5">
//             <button
//               onClick={handleAddRow}
//               className="bg-white text-[#1666FE] px-4 rounded border-[2px] border-[#1666FE] font-medium hover:bg-blue-600 hover:text-white text-[15px] w-[99px] h-[32px] text-center"
//             >
//               Add Row
//             </button>
//             <button className="text-white bg-[#1666FE] px-4 rounded border-[2px] border-[#1666FE] font-medium hover:bg-blue-600 hover:text-white text-[15px] w-[99px] h-[32px] text-center">
//               Submit
//             </button>
//           </div>
//         </div>
//         {Object.entries(calculateTotalTimeByDate()).map(([date, total]) => (
//           <p key={date} className="text-lg font-medium">
//             {" "}
//             Total Time: Today - {total} | This Week - 20 Hrs | This Month(Till
//             Date) - 240 Hrs
//           </p>
//         ))}
//         {/* Total Time: Today - 120 Min | This Week - 20 Hrs | This Month(Till Date) - 240 Hrs */}
//       </div>

//       {/* Table Section */}
//       <div className="bg-white rounded shadow p-4">
//         <table className="w-full border border-gray-300">
//           <thead>
//             <tr className="bg-[#1666FE] text-white">
//               <th className="border px-4 py-2"></th>
//               <th className="border px-4 py-2">Meeting Date</th>
//               <th className="border px-4 py-2">Activity Date</th>
//               <th className="border px-4 py-2">Time Start</th>
//               <th className="border px-4 py-2">Time End</th>
//               <th className="border px-4 py-2">Total Time</th>
//               <th className="border px-4 py-2">Work Type</th>
//               <th className="border px-4 py-2">Comment</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row, index) => (
//               <tr key={index} className="even:bg-gray-50">
//                 <td className="border px-4 py-2 text-center">
//                   <input
//                     type="checkbox"
//                     className="bg-green-500 w-[25px] h-[25px]"
//                     checked={selectedRows.includes(index)}
//                     onChange={() => handleCheckboxChange(index)}
//                   />
//                 </td>
//                 <td className="border px-4 py-2">
//                   <input
//                     type="date"
//                     value={row.meetingDate}
//                     onChange={(e) =>
//                       handleChange(index, "meetingDate", e.target.value)
//                     }
//                     className="w-full border rounded px-2 py-1"
//                   />
//                 </td>
//                 <td className="border px-4 py-2">
//                   <input
//                     type="date"
//                     value={row.activityDate}
//                     onChange={(e) =>
//                       handleChange(index, "activityDate", e.target.value)
//                     }
//                     className="w-full border rounded px-2 py-1"
//                   />
//                 </td>
//                 <td className="border px-4 py-2">
//                   <input
//                     type="time"
//                     value={row.startTime}
//                     onChange={(e) =>
//                       handleChange(index, "startTime", e.target.value)
//                     }
//                     className="w-full border rounded px-2 py-1"
//                   />
//                 </td>
//                 <td className="border px-4 py-2">
//                   <input
//                     type="time"
//                     value={row.endTime}
//                     onChange={(e) =>
//                       handleChange(index, "endTime", e.target.value)
//                     }
//                     className="w-full border rounded px-2 py-1"
//                   />
//                 </td>
//                 <td className="border px-4 py-2 text-center">
//                   {row.totalMinutes} min
//                 </td>
//                 <td className="border px-4 py-2">
//                   <input
//                     type="text"
//                     value={row.workType}
//                     onChange={(e) =>
//                       handleChange(index, "workType", e.target.value)
//                     }
//                     className="w-full border rounded px-2 py-1"
//                   />
//                 </td>
//                 <td className="border px-4 py-2">
//                   <input
//                     type="text"
//                     value={row.comments}
//                     onChange={(e) =>
//                       handleChange(index, "comments", e.target.value)
//                     }
//                     className="w-full border rounded px-2 py-1"
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <div className="flex justify-center gap-4 mt-4">
//           {selectedRows.length > 0 && (
//             <div className="flex gap-5 mt-10">
//               <button
//                 onClick={handleCopyRows}
//                 className="text-white bg-[#1666FE] px-4 rounded border-[2px] border-[#1666FE] font-medium hover:bg-blue-600 hover:text-white text-[15px] w-[99px] h-[32px] text-center"
//               >
//                 Copy
//               </button>
//               <button
//                 onClick={handleDeleteRows}
//                 className="text-white bg-[#1666FE] px-4 rounded border-[2px] border-[#1666FE] font-medium hover:bg-blue-600 hover:text-white text-[15px] w-[99px] h-[32px] text-center"
//               >
//                 Delete
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Main;

import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ImBrightnessContrast } from "react-icons/im";
import { avatar } from "../assets";

function Main() {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSubmitTimesheet = () => {
    if (rows.length === 0) {
      alert("No rows to submit.");
      return;
    }

    const email1 = "navaneethk969@gmail.com";
    const email2 = "navaneethk969@gmail.com";
    const subject = "Timesheet Submission";
    const body = rows
      .map(
        (row, index) =>
          `Row ${index + 1}:
Meeting Date: ${row.meetingDate}
Activity Date: ${row.activityDate}
Start Time: ${row.startTime}
End Time: ${row.endTime}
Total Minutes: ${row.totalMinutes}
Work Type: ${row.workType}
Comments: ${row.comments}\n\n`
      )
      .join("");

    const mailtoLink = `mailto:${email1},${email2}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

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
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[24px] font-bold mb-2">
              Timesheet &gt; Moin &gt; Edit
            </h1>
            <p className="text-gray-600 mb-2 text-[20px]">
              Assigned Tickets: 48 | Moved Tickets: 20
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-[48px] h-[49px] text-white text-[25px] rounded-[15px] bg-[#1666FE] flex justify-center items-center">
              <IoMdNotificationsOutline />
            </div>
            <div className="w-[48px] h-[49px] text-white text-[25px] rounded-[15px] bg-[#1666FE] flex justify-center items-center">
              <ImBrightnessContrast />
            </div>
            <div className="rounded-full flex justify-center items-center">
              <img
                src={avatar}
                alt="User Avatar"
                className="w-[40px] h-[40px]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-[40px] font-bold">Moin</h1>
          <div className="flex gap-5">
            <button
              onClick={handleAddRow}
              className="bg-white text-[#1666FE] px-4 rounded border-[2px] border-[#1666FE] font-medium hover:bg-blue-600 hover:text-white text-[15px] w-[99px] h-[32px] text-center"
            >
              Add Row
            </button>
            <button
              onClick={handleSubmitTimesheet}
              className="text-white bg-[#1666FE] px-4 rounded border-[2px] border-[#1666FE] font-medium hover:bg-blue-600 hover:text-white text-[15px] w-[99px] h-[32px] text-center"
            >
              Submit
            </button>
          </div>
        </div>
        {Object.entries(calculateTotalTimeByDate()).map(([date, total]) => (
          <p key={date} className="text-lg font-medium">
            {`Total Time for ${date}: ${total} minutes`}
          </p>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded shadow p-4">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-[#1666FE] text-white">
              <th className="border px-4 py-2"></th>
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
                    className="w-[25px] h-[25px]"
                    checked={selectedRows.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="date"
                    value={row.meetingDate}
                    onChange={(e) =>
                      handleChange(index, "meetingDate", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="date"
                    value={row.activityDate}
                    onChange={(e) =>
                      handleChange(index, "activityDate", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="time"
                    value={row.startTime}
                    onChange={(e) =>
                      handleChange(index, "startTime", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="time"
                    value={row.endTime}
                    onChange={(e) =>
                      handleChange(index, "endTime", e.target.value)
                    }
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
                    onChange={(e) =>
                      handleChange(index, "workType", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    value={row.comments}
                    onChange={(e) =>
                      handleChange(index, "comments", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center gap-4 mt-4">
          {selectedRows.length > 0 && (
            <div className="flex gap-5 mt-10">
              <button
                onClick={handleCopyRows}
                className="text-white bg-[#1666FE] px-4 rounded border-[2px] border-[#1666FE] font-medium hover:bg-blue-600 hover:text-white text-[15px] w-[99px] h-[32px] text-center"
              >
                Copy
              </button>
              <button
                onClick={handleDeleteRows}
                className="text-white bg-[#1666FE] px-4 rounded border-[2px] border-[#1666FE] font-medium hover:bg-blue-600 hover:text-white text-[15px] w-[99px] h-[32px] text-center"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
