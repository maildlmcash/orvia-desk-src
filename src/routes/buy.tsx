import { createFileRoute } from "@tanstack/react-router";
import { BuyPage } from "@/components/site/pages";

export const Route = createFileRoute("/buy")({
  component: BuyPage,
});
