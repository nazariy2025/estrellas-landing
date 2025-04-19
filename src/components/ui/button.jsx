export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 rounded bg-gold text-black hover:bg-yellow-400"
    >
      {children}
    </button>
  );
}