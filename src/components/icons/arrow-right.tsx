export function ArrowRight({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 7H13.5H1ZM13.5 7L7.5 1L13.5 7ZM13.5 7L7.5 13L13.5 7Z"
        fill="currentColor"
      />
      <path
        d="M13.5 7L7.5 13M1 7H13.5H1ZM13.5 7L7.5 1L13.5 7Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
