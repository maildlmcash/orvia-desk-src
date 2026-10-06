import { createFileRoute } from "@tanstack/react-router";
import { ProfileScreen } from "@/components/p2p/screens";

export const Route = createFileRoute("/profile")({
  component: ProfileScreen,
});
