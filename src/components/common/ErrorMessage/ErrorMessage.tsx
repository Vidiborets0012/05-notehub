import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage({
  message = "Something went wrong",
}: ErrorMessageProps) {
  return (
    <div className={css.wrapper}>
      <svg
        className={css.illustration}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="100"
          cy="100"
          r="70"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.25"
          className={css.circle}
        />

        <path
          d="M100 60 L135 130 H65 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.8"
        />

        <line
          x1="100"
          y1="80"
          x2="100"
          y2="110"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.85"
        />

        <circle cx="100" cy="125" r="3" fill="currentColor" opacity="0.85" />
      </svg>

      <p className={css.text}>
        {message}
        <span>Please try again later.</span>
      </p>
    </div>
  );
}
