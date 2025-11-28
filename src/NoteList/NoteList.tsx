// import { keepPreviousData, useQuery } from "@tanstack/react-query";
// import { fetchNotes } from "../services/noteService";

import type { Note } from "../types/note";
import css from "./NoteList.module.css";

interface NoteListProps {
  // page: number;
  notes: Note[];
  isLoading: boolean;
  isError: boolean;
}

export default function NoteList({ notes, isLoading, isError }: NoteListProps) {
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["notes", page],
  //   queryFn: () => fetchNotes({ page, perPage: 12 }),
  //   placeholderData: keepPreviousData,
  // });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load notes</p>;
  if (!notes.length) return null;

  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.listItem}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.content}>{note.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{note.tag}</span>
            <button className={css.button}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
