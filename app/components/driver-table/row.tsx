import type React from "react";
import ActivityCell from "../activity-cell";

export interface RowProps {
  row: Driver;
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Row: React.FC<RowProps> = ({ row }) => {
  const activeDays = getActiveDays(row.traces);

  return (
    <tr
      key={row.driverID}
      className={'text-gray-500'}
    >
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="text-sm font-medium">
          {row.forename} {row.surname}
        </div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="text-sm">
          {row.vehicleRegistration}
        </div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="text-sm">
          {totalDuration(row.traces)}
        </div>
      </td>
      {DAYS.map((day, index) => (
        <td key={index} className="px-2 py-3 whitespace-nowrap text-center">
          <ActivityCell
            isActive={activeDays.includes(DAYS[index])}
            day={DAYS[index]}
          />
        </td>
      ))}
    </tr>
  );
};

export default Row;

function totalDuration(traces: Trace[]) {
  return traces
    .flatMap((trace) => trace.activity)
    .reduce((acc, activities) => {
      return acc + activities.duration;
    }, 0);
}

function getActiveDays(traces: Trace[]) {
  return traces.flatMap((trace) => DAYS[new Date(trace.date).getDay() - 1]);
}
