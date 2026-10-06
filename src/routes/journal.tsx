import { createFileRoute } from "@tanstack/react-router";
import { JournalPage } from "@/components/site/pages";

export const Route = createFileRoute("/journal")({
  component: JournalPage,
});
