import { createFileRoute } from "@tanstack/react-router";
import { EnterScreen } from "@/components/site/enter";

export const Route = createFileRoute("/login")({
  component: EnterScreen,
});
