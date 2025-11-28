import css from "./EmptyState.module.css";

interface EmptyStateProps {
  text?: string;
}

export default function EmptyState({
  text = "No data found",
}: EmptyStateProps) {
  return <p className={css.empty}>{text}</p>;
}
