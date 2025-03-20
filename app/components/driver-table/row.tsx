import type React from "react";
import ActivityCell from "../activity-cell";

export interface RowProps {
  row: Driver;
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

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
      {DAYS.map((day) => (
        <td key={day} className="px-2 py-3 whitespace-nowrap text-center">
          <ActivityCell isActive={activeDays.includes(day)} day={day} />
        </td>
      ))}
    </tr>
  );
};

export default Row;

function totalDurationByType(traces: Trace[]) {
  const startDate = new Date("2021-02-01");
  const endDate = new Date("2021-02-07");

  return traces
    .filter((trace) => {
      const traceDate = new Date(trace.date);
      return traceDate >= startDate && traceDate <= endDate;
    })
    .flatMap((trace) => trace.activity || [])
    .reduce<Record<string, number>>((acc, activity) => {
      acc[activity.type] = (acc[activity.type] || 0) + activity.duration;
      return acc;
    }, {});
}

function getActiveDays(traces: Trace[]) {
  const startDate = new Date("2021-02-01");
  const endDate = new Date("2021-02-07");

  return traces
    .filter((trace) => {
      const traceDate = new Date(trace.date);
      return traceDate >= startDate && traceDate <= endDate;
    })
    .map((trace) => DAYS[(new Date(trace.date).getDay() + 6) % 7]);
}