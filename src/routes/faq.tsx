import { createFileRoute } from "@tanstack/react-router";
import { FaqPage } from "@/components/site/pages";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
});
