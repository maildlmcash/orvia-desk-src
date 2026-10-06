import { createFileRoute } from "@tanstack/react-router";
import { JournalPost } from "@/components/site/pages";

export const Route = createFileRoute("/journal/$slug")({
  component: Post,
});

function Post() {
  const { slug } = Route.useParams();
  return <JournalPost slug={slug} />;
}
