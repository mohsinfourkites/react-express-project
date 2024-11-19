import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition"
  >
    {children}
  </button>
);

export default Button;
