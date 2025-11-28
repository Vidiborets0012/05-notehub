import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import NoteList from "../NoteList/NoteList";
import Pagination from "../Pagination/Pagination";
import { fetchNotes } from "../services/noteService";

import css from "./App.module.css";

export default function App() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["notes", page],
    queryFn: () => fetchNotes({ page, perPage: 12 }),
    placeholderData: keepPreviousData,
  });

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* Компонент SearchBox */}
        {data && data.totalPages > 1 && (
          <Pagination
            page={page}
            totalPages={data.totalPages}
            onPageChange={setPage}
          />
        )}

        {/* Кнопка створення нотатки */}
      </header>
      <NoteList
        notes={data?.notes ?? []}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
}
