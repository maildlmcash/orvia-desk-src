import { createFileRoute } from "@tanstack/react-router";
import { OrdersScreen } from "@/components/p2p/screens";

export const Route = createFileRoute("/orders")({
  component: OrdersScreen,
});
