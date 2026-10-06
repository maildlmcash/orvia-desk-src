import { createFileRoute } from "@tanstack/react-router";
import { PostScreen } from "@/components/p2p/screens";

export const Route = createFileRoute("/post")({
  component: PostScreen,
});
