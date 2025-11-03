import type { InputHTMLAttributes, ReactNode } from "react";
import { useRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  type?: string;
  value?: string;
  id?: string;
  placeholder?: string;
  error?: string;
  success?: string;
  readOnly?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearError?: () => void;
  onClearSuccess?: () => void;
  required?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function Input({
  name,
  label,
  type = "text",
  value,
  id,
  placeholder,
  error,
  success,
  disabled,
  readOnly,
  onChange,
  onClearError,
  onClearSuccess,
  className = "",
  required,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error && onClearError) onClearError();
    if (success && onClearSuccess) onClearSuccess();
    if (onChange) onChange(e);
  };

  const state = error ? "error" : success ? "success" : null;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id || name} className="text-sm  mb-1 block">
          {label}
        </label>
      )}

      <input
        ref={inputRef}
        name={name}
        type={type}
        value={value}
        required={required}
        id={id || name}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        onChange={handleChange}
        className={`w-full px-4 py-3 rounded-xl outline-none
          placeholder-gray-400 transition-all duration-200 border
          ${
            state === "error"
              ? "border-red-500 focus:border-red-500"
              : state === "success"
              ? "border-green-500 focus:border-green-500"
              : "border-[#888888] focus:border-[#EA7527]"
          }
          ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-text"}
          ${className}
        `}
        {...props}
      />

      {state === "error" && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
      {state === "success" && (
        <p className="text-green-500 text-xs mt-1">{success}</p>
      )}
    </div>
  );
}
