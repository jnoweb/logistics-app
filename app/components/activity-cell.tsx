import type React from "react"

interface ActivityCellProps {
  isActive: boolean
  day: string
}

const ActivityCell: React.FC<ActivityCellProps> = ({ isActive, day }) => {
  return (
    <div
      className={`w-10 h-10 border border-gray-300 ${isActive ? "bg-green-600" : "bg-white"}`}
      title={`${isActive ? "Active" : "Inactive"} on ${day}`}
      aria-label={`${isActive ? "Active" : "Inactive"} on ${day}`}
    />
  )
}

export default ActivityCell

