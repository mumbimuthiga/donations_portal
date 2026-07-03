import React from "react";
import { Lock, ShieldCheck, BadgeCheck } from "lucide-react";

export default function SecurityAssurance() {
  return (
    <div>
      <div className="rounded-2xl bg-teal-900 text-teal-50 p-6 sm:p-7">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-800 shrink-0">
            <ShieldCheck className="h-4.5 w-4.5 text-amber-400" aria-hidden="true" />
          </div>
          <h2 className="font-display text-lg !text-white">Your details are safe with us</h2>
        </div>

        <ul className="mt-5 space-y-3.5 text-sm text-teal-100">
          <li className="flex gap-2.5">
            <BadgeCheck className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              Payments are processed by licensed M-Pesa and card gateways — we never see or
              store your PIN or full card number.
            </span>
          </li>
          <li className="flex gap-2.5">
            <BadgeCheck className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
            <span>Every page on this form is served over an encrypted (TLS) connection.</span>
          </li>
          <li className="flex gap-2.5">
            <ShieldCheck className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
            <span>Your email is only used to send a donation receipt — never sold or shared.</span>
          </li>
        </ul>

        
      </div>

     
    </div>
  );
}
