import { createFileRoute } from "@tanstack/react-router";
import { MerchantPage } from "@/components/site/pages";

export const Route = createFileRoute("/merchant")({
  component: MerchantPage,
});
