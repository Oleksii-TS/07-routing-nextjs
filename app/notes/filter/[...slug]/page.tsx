import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

export default async function NotesPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];
  const tagFromUrl = slug[0] ?? "All";

  const initialData = await fetchNotes("", 1, tagFromUrl);

  return (
    <NotesClient
      initialNotes={initialData.notes}
      initialTotalPages={initialData.totalPages}
      initialTag={tagFromUrl}
      initialQuery=""
      initialPage={1}
    />
  );
}
