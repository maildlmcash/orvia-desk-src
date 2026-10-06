import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/pages";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});
