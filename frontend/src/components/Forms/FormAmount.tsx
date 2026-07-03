import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  registration: UseFormRegisterReturn;
  error?: FieldError;
};

export default function FormAmount({
  registration,
  error,
}: Props) {
  return (
    <div>
      <label className="mb-2 block text-left text-sm font-medium text-stone-800">
        Donation Amount
      </label>

      <div
        className={`flex items-center rounded-lg border px-3
        ${
          error
            ? "border-red-500"
            : "border-stone-300 focus-within:border-teal-600 focus-within:ring-2 focus-within:ring-teal-600"
        }`}
      >
        <span className="border-r pr-2 text-sm text-stone-500">
          KES
        </span>

        <input
          type="number"
          placeholder="1000"
          className="w-full bg-transparent py-2.5 pl-3 outline-none"
          {...registration}
        />
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error.message}
        </p>
      )}
    </div>
  );
}