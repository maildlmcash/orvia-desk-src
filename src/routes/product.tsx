import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/pages";

export const Route = createFileRoute("/product")({
  component: ProductPage,
});
