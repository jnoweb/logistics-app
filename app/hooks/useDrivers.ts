import { useQuery } from "@tanstack/react-query";

export function useDrivers() {
  return useQuery({
    queryKey: ["drivers"],
    queryFn: () => loadDrivers() as unknown as Driver[],
  });
}

async function loadDrivers() {
  return (await import("../data/drivers.json")).data;
}
