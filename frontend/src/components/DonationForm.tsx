import React from "react";
import { Lock, Smartphone, CreditCard, ReceiptText } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import SecurityBanner from "./SecurityBanner";
import FormInput from "./Forms/FormInput";
import FormAmount from "./Forms/FormAmount";
import PaymentMethodSelector from "./Forms/PaymentMethodSelector";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { donationSchema, DonationFormData } from "../validation/donationSchema";
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
    <div
      className="min-h-screen bg-stone-50"
      style={{ fontFamily: "'Inter', ui-sans-serif, system-ui" }}
    >
      <Header />

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 sm:gap-8 items-start">
          {/* ----- Donation form card ----- */}
          <section aria-label="Donation form">
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-stone-200 overflow-hidden">
              <div className="px-6 sm:px-8 pt-7 pb-6 border-b border-dashed border-stone-300">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl text-stone-900">
                    Make a donation
                  </h2>
                </div>
                <p className="text-sm text-stone-500 mt-1">
                  Thank you for your generoisty. You'll get an emailed receipt
                  instantly.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="px-6 sm:px-8 py-7 space-y-6"
              >
                <fieldset disabled={isSubmitting} className="space-y-6">
                  {/* Name */}
                  <FormInput
                    id="donor-name"
                    label="Full name"
                    placeholder="Tester Name"
                    autoComplete="name"
                    registration={register("name")}
                    error={errors.name}
                  />
                  {/* Email */}
                  <FormInput
                    id="donor-email"
                    label="Email Address"
                    type="email"
                    placeholder="tester@email.com"
                    autoComplete="email"
                    registration={register("email")}
                    error={errors.email}
                  />
                  {/* Amount */}
                  <FormAmount
                    registration={register("amount", {
                      valueAsNumber: true,
                    })}
                    error={errors.amount}
                  />
                  {/* Payment method */}
                  <PaymentMethodSelector
                    value={method}
                    onChange={(value) => setValue("payment_method", value)}
                  />
                  <input type="hidden" {...register("payment_method")} />

                  <input type="hidden" {...register("currency")} />

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
