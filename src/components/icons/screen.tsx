export function Screen({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -3 24 24"
      width="28"
      fill="currentColor"
      {...props}
    >
      <path d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm0-2h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm4 16h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z"></path>
    </svg>
  );
}
