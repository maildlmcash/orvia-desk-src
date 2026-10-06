import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/pages";

export const Route = createFileRoute("/legal")({
  component: LegalPage,
});
