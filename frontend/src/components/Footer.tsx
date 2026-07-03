import React from "react";
import { Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 text-center sm:text-left">
        <p>© {new Date().getFullYear()} MSF Eastern Africa Donor Portal.</p>
        <p className="flex items-center gap-1.5">
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
          Secure donations, always.
        </p>
      </div>
    </footer>
  );
}
