import React from "react";
import { AlertCircle, Lock } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

interface DonationErrorProps {
  message?: string;
  onRetry?: () => void;
}

export default function DonationError({
  message = "We couldn't process your donation. Your card or M-Pesa account has not been charged.",
  onRetry,
}: DonationErrorProps) {
  return (
    <div className="min-h-screen bg-stone-50" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap');
        .font-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .font-mono-num { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
      `}</style>

      <Header
        eyebrow="Maji Njema · Clean Water Fund"
        title="Something went wrong."
        description="Don't worry — no funds have left your account. You can try again below."
      />

      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-12">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm ring-1 ring-stone-200 px-6 sm:px-8 py-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-50">
            <AlertCircle className="h-7 w-7 text-rose-600" aria-hidden="true" />
          </div>

          <h2 className="font-display mt-5 text-2xl text-stone-900">Your donation didn't go through</h2>

          <p className="mt-2 text-sm text-stone-600">{message}</p>

          <div className="mt-6 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-left text-xs text-rose-700">
            Common causes: insufficient funds, an expired card, or an M-Pesa prompt that timed
            out. If the problem continues, contact support with the time of your attempt.
          </div>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-stone-500">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            Your details remain encrypted and were not stored
          </p>

          {onRetry && (
            <button
              type="button"
              onClick={onRetry}
              className="mt-7 w-full rounded-lg bg-teal-800 py-3 text-sm font-semibold text-white transition hover:bg-teal-900"
            >
              Try again
            </button>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
