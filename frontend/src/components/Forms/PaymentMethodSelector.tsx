import { CreditCard, Smartphone } from "lucide-react";

type Props = {
  value: "mpesa" | "card";
  onChange: (value: "mpesa" | "card") => void;
};

export default function PaymentMethodSelector({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="mb-2 block text-left text-sm font-medium text-stone-800">
        Payment Method
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        {/* MPESA */}

        <button
          type="button"
          onClick={() => onChange("mpesa")}
          className={`flex items-center gap-3 rounded-lg border px-4 py-3 transition
          ${
            value === "mpesa"
              ? "border-teal-700 bg-teal-50 ring-1 ring-teal-700"
              : "border-stone-300 hover:border-teal-500"
          }`}
        >
          <Smartphone
            className={`h-5 w-5 ${
              value === "mpesa"
                ? "text-teal-700"
                : "text-stone-400"
            }`}
          />

          <div className="text-left">
            <p className="font-medium text-stone-900">
              M-Pesa
            </p>

            <p className="text-xs text-stone-500">
              STK Push
            </p>
          </div>
        </button>

        {/* CARD */}

        <button
          type="button"
          onClick={() => onChange("card")}
          className={`flex items-center gap-3 rounded-lg border px-4 py-3 transition
          ${
            value === "card"
              ? "border-teal-700 bg-teal-50 ring-1 ring-teal-700"
              : "border-stone-300 hover:border-teal-500"
          }`}
        >
          <CreditCard
            className={`h-5 w-5 ${
              value === "card"
                ? "text-teal-700"
                : "text-stone-400"
            }`}
          />

          <div className="text-left">
            <p className="font-medium text-stone-900">
              Card
            </p>

            <p className="text-xs text-stone-500">
              Visa / Mastercard
            </p>
          </div>
        </button>

      </div>
    </div>
  );
}