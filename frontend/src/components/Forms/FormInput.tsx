import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type FormInputProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
};

export default function FormInput({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  registration,
  error,
}: FormInputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-left text-sm font-medium text-stone-800"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...registration}
        className={`w-full rounded-lg border px-3.5 py-2.5 outline-none transition
        ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-stone-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600"
        }`}
      />

      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error.message}
        </p>
      )}
    </div>
  );
}