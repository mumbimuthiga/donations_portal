import React from "react";
import { CheckCircle2, Lock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { PaymentMethod } from "../types/donation"
import { useLocation } from "react-router-dom";



export default function DonationSuccess(){
    const { state } = useLocation();
 

  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui" }}>
      

      <Header
        eyebrow="MSF Eastern Africa"
        title="Asante sana."
        description="Your gift is confirmed and already on its way to funding the next well."
      />

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm ring-1 ring-stone-200 px-6 sm:px-8 py-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50">
            <CheckCircle2 className="h-7 w-7 text-teal-700" aria-hidden="true" />
          </div>

          <h2 className="font-display mt-5 text-2xl text-stone-900">Asante,.</h2>

          <p className="mt-2 text-sm text-stone-600">
            Your donation of{" "}
            <span className="font-mono-num text-stone-900">KES {state.amount}</span> via{" "}
            {state.method === "mpesa" ? "M-Pesa" : "card"} is confirmed. A receipt is on its way to your
            inbox.
          </p>

          <div className="mt-6 mx-auto max-w-xs rounded-lg border border-dashed border-stone-300 px-4 py-3 perforated">
            <p className="text-xs text-stone-500">Reference</p>
            <p className="font-mono-num text-sm text-stone-800 mt-0.5">{state.transaction_reference}</p>
          </div>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-stone-500">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            Processed over an encrypted connection
          </p>

         
        </div>
      </main>

      <Footer />
    </div>
  );
}
