import React from 'react';

const OPDTimingsTable = ({ timings }) => {
  if (!timings || timings.length === 0) return null;

  return (
    <div className="overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#f8f7f2]">
            <th className="text-left px-3 py-2 text-[#7a7a7a] font-medium">Day</th>
            <th className="text-left px-3 py-2 text-[#7a7a7a] font-medium">Timing</th>
          </tr>
        </thead>
        <tbody>
          {timings.map((timing, index) => (
            <tr key={index} className="border-b border-[#e5e4df] last:border-b-0">
              <td className="px-3 py-2.5 text-[#1a1a1a] font-medium">{timing.day}</td>
              <td className="px-3 py-2.5 text-[#4a4a4a]">{timing.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OPDTimingsTable;
