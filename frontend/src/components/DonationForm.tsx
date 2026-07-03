import React from "react";
import { Lock, Smartphone, CreditCard, ReceiptText } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import SecurityBanner from "./SecurityBanner";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  donationSchema,
  DonationFormData,
} from "../validation/donationSchema";
import { submitDonation } from "../api/donationApi";
import { Currency, PaymentMethod } from "../types/donation";
import { useNavigate } from "react-router-dom";

export default function DonationForm() {
  const {
  register,
  handleSubmit,
  watch,
  setValue,
  reset,
  formState: { errors, isSubmitting },
} = useForm<DonationFormData>({
  resolver: zodResolver(donationSchema),
  defaultValues: {
    payment_method: PaymentMethod.MPESA,
    currency: Currency.KES,
  },
});
const method = watch("payment_method");
const navigate = useNavigate();

const onSubmit = async (data: DonationFormData) => {
  try {
    const response = await submitDonation(data);

    console.log("Donation successful:", response);

    reset();
     if (response.success) {
      navigate("/success", {
        state: response,
      });
    } else {
      navigate("/failed", {
        state: response,
      });
    }
  } catch (error) {
    console.error("Donation failed:", error);
    navigate("/failed", {
      state: {
        message: "Unable to process your donation.",
      },
    });
  }
};
return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui" }}>
     

      <Header />

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 sm:gap-8 items-start">
          {/* ----- Donation form card ----- */}
          <section aria-label="Donation form">
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-stone-200 overflow-hidden">
              <div className="px-6 sm:px-8 pt-7 pb-6 border-b border-dashed border-stone-300">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl text-stone-900">Make a donation</h2>
                  
                </div>
                <p className="text-sm text-stone-500 mt-1">
                  Thank you for your generoisty. You'll get an emailed receipt instantly.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="px-6 sm:px-8 py-7 space-y-6">
                <fieldset
                  disabled={isSubmitting}
                  className="space-y-6"
>
                {/* Name */}
                <div>
                  <label htmlFor="donor-name" className="block w-full text-left text-sm font-medium text-stone-800">
                    Full name
                  </label>
                  <input
                    {...register("name")}
                    id="donor-name"
                    type="text"
                    placeholder="Tester Name"
                    autoComplete="name"
                    className="mt-1.5 w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-stone-900 placeholder-stone-400 outline-none transition focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                  />
                </div>
                {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                    </p>
                )}

                {/* Email */}
                <div>
                  <label htmlFor="donor-email" className="block w-full text-left text-sm font-medium text-stone-800">
                    Email address
                  </label>
                  <input
                  {...register("email")}
                    id="donor-email"
                    type="email"
                    placeholder="test@email.com"
                    autoComplete="email"
                    className="mt-1.5 w-full rounded-lg border border-stone-300 px-3.5 py-2.5 text-stone-900 placeholder-stone-400 outline-none transition focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                  </p>
              )}

                {/* Amount */}
                <div>
                  <label
    className="block w-full text-left text-sm font-medium text-stone-800"
>Donation amount (KES)</label>
                  
                  <div className="mt-2 flex items-center rounded-lg border border-stone-300 px-3.5 focus-within:ring-2 focus-within:ring-teal-600">
                    <span className="font-mono-num text-sm text-stone-500 pr-2 border-r border-stone-200">
                      KES
                    </span>
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      placeholder="Amount"
                      {...register("amount", { valueAsNumber: true })}
                      className="font-mono-num w-full bg-transparent py-2.5 pl-2.5 text-stone-900 placeholder-stone-400 outline-none"
                    />
                  </div>
                </div>
                {
                  errors.amount && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.amount.message}
                      </p>
                  )
                }

                {/* Payment method */}
                <div>
                  <label
    className="block w-full text-left text-sm font-medium text-stone-800"
>Payment method</label>
                  <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setValue("payment_method", "mpesa")}
      
                      aria-pressed={method === "mpesa"}
                      className={`flex items-center gap-2.5 rounded-lg border px-4 py-3 text-left transition ${
                        method === "mpesa"
                          ? "border-teal-700 bg-teal-50 ring-1 ring-teal-700"
                          : "border-stone-300 hover:border-teal-500"
                      }`}
                    >
                      <Smartphone
                        className={`h-4.5 w-4.5 shrink-0 ${method === "mpesa" ? "text-teal-700" : "text-stone-400"}`}
                        aria-hidden="true"
                      />
                      <span>
                        <span className="block text-sm font-medium text-stone-900">M-Pesa</span>
                        <span className="block text-xs text-stone-500">STK push</span>
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setValue("payment_method", "card")}
                      aria-pressed={method === "card"}
                      className={`flex items-center gap-2.5 rounded-lg border px-4 py-3 text-left transition ${
                        method === "card"
                          ? "border-teal-700 bg-teal-50 ring-1 ring-teal-700"
                          : "border-stone-300 hover:border-teal-500"
                      }`}
                    >
                      <CreditCard
                        className={`h-4.5 w-4.5 shrink-0 ${method === "card" ? "text-teal-700" : "text-stone-400"}`}
                        aria-hidden="true"
                      />
                      <span>
                        <span className="block text-sm font-medium text-stone-900">Card</span>
                        <span className="block text-xs text-stone-500">Visa, Mastercard</span>
                      </span>
                    </button>
                  </div>
                </div>
<input
  type="hidden"
  {...register("payment_method")}
/>

<input
  type="hidden"
  {...register("currency")}
/>
               

               <button
    type="submit"
    disabled={isSubmitting}
    className="w-full rounded-lg bg-teal-800 py-3.5 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
>
                  {isSubmitting
    ? "Processing Donation..."
    : method === "mpesa"
        ? "Send M-Pesa Prompt"
        : "Continue to Secure Checkout"}
                </button>

                
                </fieldset>
              </form>
            </div>
          </section>

          {/* ----- Security assurance ----- */}
          <aside aria-label="Security assurance" className="lg:sticky lg:top-8">
            <SecurityBanner />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
 );

}