import { createFileRoute } from "@tanstack/react-router";
import { AdminScreen } from "@/components/p2p/admin";

export const Route = createFileRoute("/admin")({
  component: AdminScreen,
});
