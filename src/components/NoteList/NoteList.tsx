import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Note } from "../../types/note";
import { deleteNote } from "../../services/noteService";
import toast from "react-hot-toast";
import Loader from "../common/Loader/Loader";
import EmptyState from "../common/EmptyState/EmptyState";
import ErrorMessage from "../common/ErrorMessage/ErrorMessage";

import css from "./NoteList.module.css";

interface NoteListProps {
  notes: Note[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

export default function NoteList({
  notes,
  isLoading,
  isError,
  error,
}: NoteListProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: string) => deleteNote(id),
    onSuccess: () => {
      toast.success("Note deleted");
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage message={error?.message} />;
  if (!notes.length && !isLoading)
    return (
      <EmptyState
        title="No notes found"
        subtitle="Try creating your first note."
      />
    );

  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <button
              className={css.button}
              onClick={() => mutation.mutate(note.id)}
              disabled={mutation.isPending}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
