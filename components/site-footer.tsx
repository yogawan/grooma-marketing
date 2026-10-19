import { Scissors } from "lucide-react";
import Link from "next/link";

const footerColumns = [
  [
    "PRODUK",
    [
      ["Fitur", "/#fitur"],
      ["Cara Kerja", "/#cara-kerja"],
      ["Harga", "/#harga"],
      ["FAQ", "/#faq"],
    ],
  ],
  [
    "PERUSAHAAN",
    [
      ["Tentang Kami", "/tentang"],
      ["Kontak", "/kontak"],
    ],
  ],
  [
    "LEGAL",
    [
      ["Syarat & Ketentuan", "/syarat-ketentuan"],
      ["Kebijakan Privasi", "/kebijakan-privasi"],
    ],
  ],
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_.6fr_.6fr_.6fr]">
          <div>
            <Link href="/#beranda" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                <Scissors className="h-5 w-5" />
              </span>
              <span className="font-extrabold tracking-[-.05em] text-primary-hover">
                Grooma
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-xs leading-5 text-muted">
              Aplikasi kasir dan manajemen operasional untuk pemilik barbershop
              — termasuk yang punya banyak cabang. Transaksi, stok, komisi
              karyawan, dan laporan bisnis tercatat otomatis dalam satu sistem,
              bisa diakses langsung dari HP.
            </p>
          </div>
          {footerColumns.map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-bold tracking-[.13em] text-muted">
                {title}
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
                {links.map(([label, href]) => (
                  <Link key={label} href={href}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs text-muted">
          © 2026 Grooma. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
