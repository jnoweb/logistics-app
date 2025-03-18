import type { Route } from "./+types/main";
import Dashboard from "../dashboard/dashboard";
import Layout from "~/components/layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Logistics uk" },
    { name: "description", content: "Dashboard" },
  ];
}

export default function Main() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}
