import { createFileRoute } from "@tanstack/react-router";
import { HelpPage } from "@/components/site/pages";

export const Route = createFileRoute("/help")({
  component: HelpPage,
});
