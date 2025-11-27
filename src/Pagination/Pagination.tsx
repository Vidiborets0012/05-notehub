import { keepPreviousData, useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import { fetchNotes } from "../services/noteService";

import css from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ page, onPageChange }: PaginationProps) {
  const { data } = useQuery({
    queryKey: ["notes", page],
    queryFn: () => fetchNotes({ page, perPage: 12 }),
    placeholderData: keepPreviousData,
  });

  if (!data || data.totalPages <= 1) return null;

  return (
    <ReactPaginate
      pageCount={data.totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      forcePage={page - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      breakLabel="..."
      nextLabel="→"
      previousLabel="←"
    />
  );
}
