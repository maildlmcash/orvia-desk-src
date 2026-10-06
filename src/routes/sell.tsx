import { createFileRoute } from "@tanstack/react-router";
import { SellPage } from "@/components/site/pages";

export const Route = createFileRoute("/sell")({
  component: SellPage,
});
