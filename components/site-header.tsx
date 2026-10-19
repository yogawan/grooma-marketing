import { ArrowRight, Scissors } from "lucide-react";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";

const navLinks = [
  ["Fitur", "/#fitur"],
  ["Cara Kerja", "/#cara-kerja"],
  ["Harga", "/#harga"],
  ["FAQ", "/#faq"],
] as const;

export function SiteHeader() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/#beranda"
          className="flex items-center gap-2.5"
          aria-label="Grooma beranda"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
            <Scissors className="h-5 w-5" />
          </span>
          <span className="text-lg font-extrabold tracking-[-.05em] text-primary-hover">
            Grooma
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex">
          {navLinks.map(([label, href]) => (
            <Link key={label} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/login"
            className="text-sm font-semibold text-muted transition-colors hover:text-primary"
          >
            Masuk
          </Link>
          <Button asChild>
            <Link href="/daftar">
              Mulai Sekarang <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
