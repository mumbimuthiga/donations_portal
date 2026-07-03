import React from "react";
import { CheckCircle2, Lock } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import type { PaymentMethod } from "./types";

interface DonationSuccessProps {
  donorName?: string;
  amount?: number;
  method?: PaymentMethod;
  reference?: string;
  onDonateAgain?: () => void;
}

export default function DonationSuccess({
  donorName = "friend",
  amount = 0,
  method = "mpesa",
  reference = "MN-000000",
  onDonateAgain,
}: DonationSuccessProps) {
  const firstName = donorName.split(" ")[0] || "friend";

  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap');
        .font-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .font-mono-num { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
        .perforated {
          background-image: radial-gradient(circle, #F5F3EE 3px, transparent 3px);
          background-size: 14px 2px;
          background-repeat: repeat-x;
        }
      `}</style>

      <Header
        eyebrow="Maji Njema · Clean Water Fund"
        title="Asante sana."
        description="Your gift is confirmed and already on its way to funding the next well."
      />

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm ring-1 ring-stone-200 px-6 sm:px-8 py-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50">
            <CheckCircle2 className="h-7 w-7 text-teal-700" aria-hidden="true" />
          </div>

          <h2 className="font-display mt-5 text-2xl text-stone-900">Asante, {firstName}.</h2>

          <p className="mt-2 text-sm text-stone-600">
            Your donation of{" "}
            <span className="font-mono-num text-stone-900">KES {amount.toLocaleString()}</span> via{" "}
            {method === "mpesa" ? "M-Pesa" : "card"} is confirmed. A receipt is on its way to your
            inbox.
          </p>

          <div className="mt-6 mx-auto max-w-xs rounded-lg border border-dashed border-stone-300 px-4 py-3 perforated">
            <p className="text-xs text-stone-500">Reference</p>
            <p className="font-mono-num text-sm text-stone-800 mt-0.5">{reference}</p>
          </div>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-stone-500">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            Processed over an encrypted connection
          </p>

          {onDonateAgain && (
            <button
              type="button"
              onClick={onDonateAgain}
              className="mt-7 text-sm font-medium text-teal-800 hover:text-teal-900 underline underline-offset-4"
            >
              Make another donation
            </button>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
