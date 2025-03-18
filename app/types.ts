interface Activity {
  startTime: string;
  type: "drive" | "rest" | "work" | "available";
  duration: number; 
}

interface Trace {
  date: string; 
  activity: Activity[];
}

interface Driver {
  driverID: number;
  surname: string;
  forename: string;
  vehicleRegistration: string;
  traces: Trace[];
}
