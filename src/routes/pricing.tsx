import { createFileRoute } from "@tanstack/react-router";
import { PricingPage } from "@/components/site/pages";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});
