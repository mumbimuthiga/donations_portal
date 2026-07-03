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
          <h2 className="font-display text-lg text-white">Your details are safe with us</h2>
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

        <div className="mt-6 pt-5 border-t border-teal-800 flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-teal-200">
          <span className="rounded border border-teal-700 px-2 py-1">PCI‑DSS</span>
          <span className="rounded border border-teal-700 px-2 py-1">TLS 1.3</span>
          <span className="rounded border border-teal-700 px-2 py-1">Safaricom Daraja API</span>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-stone-500 px-1">
        MSF Eastern Africa is a registered CBO (No. 12293939). Donations above KES 5,000
        qualify for a tax-deductible receipt on request.
      </p>
    </div>
  );
}
