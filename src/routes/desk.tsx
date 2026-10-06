import { createFileRoute } from "@tanstack/react-router";
import { DeskScreen } from "@/components/p2p/screens";

export const Route = createFileRoute("/desk")({
  component: DeskScreen,
});
