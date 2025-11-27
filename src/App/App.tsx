import { useState } from "react";
import NoteList from "../NoteList/NoteList";
import Pagination from "../Pagination/Pagination";

import css from "./App.module.css";

export default function App() {
  const [page, setPage] = useState(1);

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* Компонент SearchBox */}
        <Pagination page={page} onPageChange={setPage} />
        {/* Кнопка створення нотатки */}
      </header>
      <NoteList page={page} />
    </div>
  );
}
