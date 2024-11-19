import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <div className="w-full">
    {label && <label className="block text-sm mb-1">{label}</label>}
    <input
      {...props}
      className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-indigo-500 focus:outline-none"
    />
  </div>
);

export default Input;
