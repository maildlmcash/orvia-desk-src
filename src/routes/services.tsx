import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/site/pages";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});
