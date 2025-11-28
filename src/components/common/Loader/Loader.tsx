import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.wrapper}>
      <svg className={css.spinner} viewBox="0 0 50 50">
        <defs>
          <linearGradient id="iosGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5ac8fa" />
            <stop offset="50%" stopColor="#007aff" />
            <stop offset="100%" stopColor="#5856d6" />
          </linearGradient>
        </defs>

        <circle
          className={css.path}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
          stroke="url(#iosGradient)"
        />
      </svg>
    </div>
  );
}
