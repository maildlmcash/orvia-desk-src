import { createFileRoute } from "@tanstack/react-router";
import { IdentityScreen } from "@/components/p2p/screens";

export const Route = createFileRoute("/identity")({
  component: IdentityScreen,
});
