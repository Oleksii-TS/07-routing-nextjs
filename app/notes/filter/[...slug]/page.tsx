import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function Notes({ params }: Props) {
  const { slug } = await params;
  const tagFromUrl = slug[0] === "All" ? "" : slug[0];
  const initialData = await fetchNotes("", 1, tagFromUrl);

  return (
    <NotesClient
      initialNotes={initialData.notes}
      initialTotalPages={initialData.totalPages}
      tag={tagFromUrl}
    />
  );
}
