import React from "react";
import { CheckCircle2, Lock,AlertCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { PaymentMethod } from "../types/donation"
import { useLocation } from "react-router-dom";



export default function DonationError(){
      const { state } = useLocation();

  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui" }}>
      

      <Header
        eyebrow="Donations Portal"
        title="Something went wrong."
        description="Don't worry — no funds have left your account. You can try again below."
      />

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm ring-1 ring-stone-200 px-6 sm:px-8 py-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-50">
            <AlertCircle className="h-7 w-7 text-rose-600" aria-hidden="true" />
          </div>

          <h2 className="font-display mt-5 text-2xl text-stone-900">Your donation didn't go through</h2>

          <p className="mt-2 text-sm text-stone-600">{state.message}</p>

          <div className="mt-6 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-left text-xs text-rose-700">
            Common causes: insufficient funds, an expired card, or an M-Pesa prompt that timed
            out. If the problem continues, contact support with the time of your attempt.
          </div>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-stone-500">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            Your details remain encrypted and were not stored
          </p>

          
            <button
              type="button"
            //   onClick={}
              className="mt-7 w-full rounded-lg bg-teal-800 py-3 text-sm font-semibold text-white transition hover:bg-teal-900"
            >
              Try again
            </button>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
