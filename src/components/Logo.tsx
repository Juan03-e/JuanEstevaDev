
const Logo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M25 0L50 25L25 50L0 25L25 0Z"
      fill="hsl(var(--primary))"
    />
    <path
      d="M25 10L40 25L25 40L10 25L25 10Z"
      fill="hsl(var(--background))"
    />
  </svg>
);
export default Logo;

