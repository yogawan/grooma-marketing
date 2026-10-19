"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  ["Fitur", "/#fitur"],
  ["Cara Kerja", "/#cara-kerja"],
  ["Harga", "/#harga"],
  ["FAQ", "/#faq"],
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Tutup menu" : "Buka menu"}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-[72px] z-40 border-b border-border bg-surface px-5 py-6 shadow-lg">
          <div className="flex flex-col gap-5 text-sm font-medium text-muted">
            {navLinks.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-primary"
            >
              Masuk
            </Link>
            <Button asChild>
              <Link href="/daftar" onClick={() => setOpen(false)}>
                Mulai Sekarang <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
