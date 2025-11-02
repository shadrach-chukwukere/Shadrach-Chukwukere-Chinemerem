import type { InputHTMLAttributes } from "react";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckBox({
  label,
  checked,
  value,
  disabled,
  onChange,
  ...props
}: CheckBoxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        value={value}
        onChange={onChange}
        {...props}
        className="
          w-5 h-5
          border-2 border-white
          rounded-md
          accent-[#EA7527]
          bg-transparent
          checked:bg-yellow-400
          checked:border-yellow-400
          transition
          duration-200
          focus:outline-none
        "
      />
      {label && <span className=" text-sm flex flex-nowrap">{label}</span>}
    </label>
  );
}
