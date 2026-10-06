import { createFileRoute } from "@tanstack/react-router";
import { FeesPage } from "@/components/site/pages";

export const Route = createFileRoute("/fees")({
  component: FeesPage,
});
