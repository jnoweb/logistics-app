import type React from "react";
import ActivityCell from "../activity-cell";

export interface RowProps {
  row: Driver;
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Row: React.FC<RowProps> = ({ row }) => {
  const activeDays = getActiveDays(row.traces);
  const activityTotals = totalDurationByType(row.traces);

  return (
    <tr key={row.driverID} className="text-gray-500">
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="text-sm font-medium">
          {row.forename} {row.surname}
        </div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="text-sm">{row.vehicleRegistration}</div>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="text-sm">
          {Object.entries(activityTotals).map(([type, duration]) => (
            <div key={type}>
              {type}: {duration} min
            </div>
          ))}
        </div>
      </td>
      {DAYS.map((day, index) => (
        <td key={index} className="px-2 py-3 whitespace-nowrap text-center">
          <ActivityCell isActive={activeDays.includes(day)} day={day} />
        </td>
      ))}
    </tr>
  );
};

export default Row;

function totalDurationByType(traces: Trace[]) {
  return traces?.flatMap((trace) => trace.activity || [])
    .reduce<Record<string, number>>((acc, activity) => {
      acc[activity.type] = (acc[activity.type] || 0) + activity.duration;
      return acc;
    }, {}) || {};
}

function getActiveDays(traces: Trace[]) {
  return traces
    ?.filter((trace) => trace.activity.length > 0)
    .map((trace) => DAYS[new Date(trace.date).getDay()]);
}