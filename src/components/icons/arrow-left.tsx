export function ArrowLeft({ ...props }) {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.5 7H1H13.5ZM1 7L7 1L1 7ZM1 7L7 13L1 7Z" fill="currentColor" />
      <path
        d="M1 7L7 13M13.5 7H1H13.5ZM1 7L7 1L1 7Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
