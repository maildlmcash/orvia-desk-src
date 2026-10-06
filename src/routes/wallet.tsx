import { createFileRoute } from "@tanstack/react-router";
import { WalletScreen } from "@/components/p2p/screens";

export const Route = createFileRoute("/wallet")({
  component: WalletScreen,
});
