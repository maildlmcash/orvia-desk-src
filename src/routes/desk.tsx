import { createFileRoute } from "@tanstack/react-router";
import { Market } from "@/components/p2p/market";

export const Route = createFileRoute("/desk")({
  component: Market,
});
