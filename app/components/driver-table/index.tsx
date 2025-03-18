import type React from "react";
import Row, { type RowProps } from "./row";

interface DriverTableProps {
  rows: RowProps["row"][];
}

const DriverTable: React.FC<DriverTableProps> = ({ rows }) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700 text-left">
              <th className="px-4 py-3 text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Driver Name
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Vehicle Reg
              </th>
              <th className="px-4 py-3 text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Total Activity
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  className="px-2 py-3 text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider text-center w-12"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-500">
            {rows.map((row, index) => (
              <Row row={row} key={index}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverTable;
