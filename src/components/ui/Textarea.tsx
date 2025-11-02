import type { TextareaHTMLAttributes, ReactNode } from "react";
import { useRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  rows?: number;
  className?: string;
  error?: string;
  success?: string;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClearError?: () => void;
  onClearSuccess?: () => void;
  required?: boolean;
  children?: ReactNode;
}

export default function Textarea({
  name,
  label,
  value,
  placeholder,
  rows = 4,
  className = "",
  error,
  success,
  disabled,
  readOnly,
  onChange,
  onClearError,
  onClearSuccess,
  required,
  ...props
}: TextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (error && onClearError) onClearError();
    if (success && onClearSuccess) onClearSuccess();
    if (onChange) onChange(e);
  };

  const state = error ? "error" : success ? "success" : null;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="text-sm  mb-1 block">
          {label}
        </label>
      )}

      <textarea
        ref={textareaRef}
        name={name}
        value={value}
        required={required}
        placeholder={placeholder}
        rows={rows}
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
