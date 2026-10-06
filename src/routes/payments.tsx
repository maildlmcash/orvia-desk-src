import { createFileRoute } from "@tanstack/react-router";
import { PaymentsScreen } from "@/components/p2p/screens";

export const Route = createFileRoute("/payments")({
  component: PaymentsScreen,
});
