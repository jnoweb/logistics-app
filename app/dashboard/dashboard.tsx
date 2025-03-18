import type React from "react";
import { useState } from "react";
import Search from "../components/search";
import DriverTable from "../components/driver-table";
import { useDrivers } from "~/hooks/useDrivers";

const Dashboard: React.FC = () => {
  const { data: drivers } = useDrivers();
  const [searchDrivers, setSearchDrivers] = useState<Driver[] | undefined>();

  const handleSearch = (query: string) => {
    const filtered = drivers?.filter(
      (driver) =>
        driver.forename.toLowerCase().includes(query.toLowerCase()) ||
        driver.surname.toLowerCase().includes(query.toLowerCase()) ||
        driver.vehicleRegistration.toLowerCase().includes(query.toLowerCase())
    );
    setSearchDrivers(filtered as Driver[]);
  };

  return (
    <div className="p-6">
      <Search onSearch={handleSearch} />
      {drivers && <DriverTable rows={searchDrivers || drivers} />}
    </div>
  );
};

export default Dashboard;
