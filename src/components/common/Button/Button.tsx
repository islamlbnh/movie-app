const Button = ({ children }: { children: string }) => {
  return (
    <button className="px-4 py-2 bg-red-500 text-white rounded">
      {children}
    </button>
  );
};

export default Button;
