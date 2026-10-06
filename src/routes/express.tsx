import { createFileRoute } from "@tanstack/react-router";
import { ExpressScreen } from "@/components/p2p/screens";

export const Route = createFileRoute("/express")({
  component: ExpressScreen,
});
