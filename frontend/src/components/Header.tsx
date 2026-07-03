import React from "react";
import { Droplet } from "lucide-react";

interface HeaderProps {
   eyebrow?: string;
  title?: string;
  description?: string;
}

export default function Header({
   eyebrow = "MSF Eastern Africa",
  title = "MSF Eastern Africa Donor Portal",
  description = "Every donation is tracked from your wallet to the beneficiaries.",
}: HeaderProps) {
  return (
    <header className="border-b border-stone-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-20">
        <div className="flex items-center gap-2 text-teal-700">
          <Droplet className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          <span className="text-xs font-semibold tracking-[0.18em] uppercase">{eyebrow}</span>
        </div>

        <h4 className="font-display mt-5 max-w-2xl text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-stone-900">
          {title}
        </h4>

        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
