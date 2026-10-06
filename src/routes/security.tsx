import { createFileRoute } from "@tanstack/react-router";
import { SecurityPage } from "@/components/site/pages";

export const Route = createFileRoute("/security")({
  component: SecurityPage,
});
