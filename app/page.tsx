import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  Calculator,
  Check,
  ChevronDown,
  Crown,
  Gift,
  History,
  KeyRound,
  LayoutDashboard,
  LineChart,
  MapPin,
  PackageCheck,
  PackageX,
  PenLine,
  Percent,
  QrCode,
  Scissors,
  ShieldCheck,
  Smartphone,
  Store,
  TrendingUp,
  UserPlus,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Intro } from "@/components/section-intro";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SplashScreen } from "@/components/splash-screen";
import { Button } from "@/components/ui/button";

const problems = [
  [
    BookOpen,
    "Masih Catat Manual di Buku atau Excel?",
    "Satu transaksi kelewat catat, laporan akhir bulan jadi tidak akurat — dan Anda yang pusing mencari selisihnya.",
  ],
  [
    MapPin,
    "Tidak Bisa Pantau Cabang Lain dari Jauh?",
    "Kalau tidak datang langsung, Anda tidak tahu cabang mana yang ramai, mana yang sepi, atau mana yang omzetnya aneh.",
  ],
  [
    PackageX,
    "Stok Produk Suka Habis Tanpa Diduga?",
    "Pomade atau alat cukur kehabisan saat pelanggan sedang ramai-ramainya — dan Anda baru tahu setelah staf lapor.",
  ],
  [
    Calculator,
    "Hitung Komisi Karyawan Masih Manual?",
    "Setiap akhir bulan harus buka catatan satu per satu untuk hitung bagi hasil — rawan salah, rawan tidak transparan ke karyawan.",
  ],
] as const;

const pillars = [
  [
    "01",
    PenLine,
    "Catat",
    "Semua transaksi, stok, dan data pelanggan tercatat otomatis saat terjadi — bukan diinput ulang nanti.",
  ],
  [
    "02",
    LayoutDashboard,
    "Pantau",
    "Lihat kondisi bisnis Anda real-time dari satu dashboard, tanpa harus menelepon atau mendatangi tiap cabang.",
  ],
  [
    "03",
    TrendingUp,
    "Berkembang",
    "Dengan data yang akurat, Anda bisa ambil keputusan lebih cepat — layanan mana paling laku, cabang mana yang butuh perhatian.",
  ],
] as const;

const features = [
  [
    Zap,
    "Kasir Cepat & Simpel",
    "Transaksi Selesai dalam Hitungan Detik",
    "Staf tinggal pilih layanan, pilih pelanggan (atau input baru), lalu pilih metode bayar. Semua otomatis terhitung dan langsung tersimpan sebagai laporan.",
  ],
  [
    QrCode,
    "Pembayaran QRIS yang Fleksibel",
    "QRIS Siap Pakai, atau Tetap Pakai QRIS Anda Sendiri",
    "Mau praktis? Aktifkan QRIS langsung di Grooma. Sudah punya payment gateway sendiri? Tetap pakai itu — Grooma cukup mencatat transaksinya supaya laporan tetap rapi dan terpusat.",
  ],
  [
    Building2,
    "Satu Dashboard untuk Semua Cabang",
    "Pantau Semua Cabang, Tanpa Harus Keliling",
    "Sebagai pemilik, Anda bisa melihat transaksi, omzet, dan performa setiap cabang dari satu tempat — kapan saja, dari mana saja.",
  ],
  [
    PackageCheck,
    "Inventaris yang Selalu Terkontrol",
    "Stok Menipis? Anda Tahu Sebelum Kehabisan",
    "Setiap cabang punya pencatatan stok sendiri, lengkap dengan batas minimum. Produk atau alat penting tidak lagi tiba-tiba habis saat pelanggan sedang ramai.",
  ],
  [
    Gift,
    "Pelanggan Loyal dengan Poin Otomatis",
    "Pelanggan Balik Lagi, Berkat Poin yang Terkumpul Sendiri",
    "Setiap transaksi yang dibayar otomatis menambah poin loyalitas pelanggan. Tidak perlu stempel kartu atau hitung manual — datanya tersimpan rapi di profil pelanggan.",
  ],
  [
    Percent,
    "Komisi Karyawan, Hitung Otomatis",
    "Tidak Perlu Lagi Hitung Komisi Pakai Kalkulator",
    "Atur persentase bagi hasil sekali di awal untuk tiap layanan. Setiap transaksi selesai, bagian karyawan dan bagian bisnis langsung terhitung otomatis.",
  ],
  [
    ShieldCheck,
    "Koreksi Transaksi, Harus Disetujui",
    "Satu Kesalahan Input Tidak Akan Mengubah Laporan Begitu Saja",
    "Kalau ada transaksi yang perlu dikoreksi, staf cukup mengajukan — dan hanya pemilik/pengelola yang berwenang yang bisa menyetujuinya. Semua tercatat jelas siapa mengajukan dan siapa menyetujui.",
  ],
  [
    BarChart3,
    "Laporan Berbasis Data Asli",
    "Laporan yang Anda Lihat, Itu yang Sebenarnya Terjadi",
    "Setiap angka di dashboard — omzet, performa layanan, performa karyawan — dihitung langsung dari transaksi yang tercatat. Tidak ada estimasi, tidak ada angka kira-kira.",
  ],
] as const;

const steps = [
  [
    Store,
    "Daftar & Atur Bisnis Anda",
    "Buat akun, tambahkan cabang, layanan, dan harga sesuai bisnis Anda.",
  ],
  [
    UserPlus,
    "Undang Tim Anda",
    "Tambahkan staf tiap cabang, masing-masing otomatis hanya bisa mengakses cabangnya sendiri.",
  ],
  [
    Smartphone,
    "Mulai Catat Transaksi",
    "Staf mencatat transaksi langsung dari HP atau tablet di kasir — tunai atau QRIS.",
  ],
  [
    LineChart,
    "Pantau, Setujui, dan Berkembang",
    "Anda memantau dashboard real-time, menyetujui pengajuan koreksi, dan membaca laporan performa bisnis.",
  ],
] as const;

const roleColumns = [
  [
    Crown,
    "Untuk Pemilik/Pengelola",
    [
      "Pantau transaksi dan omzet semua cabang dari satu dashboard",
      "Setujui atau tolak pengajuan koreksi transaksi",
      "Atur layanan, harga, dan pembagian komisi karyawan",
      "Kelola akun staf dan akses per cabang",
      "Lihat laporan performa layanan, karyawan, dan stok — berbasis data asli",
    ],
  ],
  [
    Scissors,
    "Untuk Staf/Barber",
    [
      "Catat transaksi dalam hitungan detik, langsung dari HP",
      "Terima pembayaran tunai atau QRIS tanpa alat tambahan",
      "Kelola stok produk di cabangnya sendiri",
      "Ajukan koreksi kalau ada salah input, tinggal tunggu persetujuan",
      "Lihat ringkasan performa cabangnya sendiri",
    ],
  ],
] as const;

const securityPoints = [
  [Building2, "Akses staf dibatasi sesuai cabang tempat ia bertugas."],
  [
    History,
    "Setiap perubahan transaksi tercatat jelas siapa yang mengajukan dan siapa yang menyetujui.",
  ],
  [
    KeyRound,
    "Kata sandi dan data sensitif disimpan terenkripsi, tidak pernah ditampilkan dalam bentuk asli.",
  ],
] as const;

const inclusions = [
  "Transaksi & kasir tanpa batas",
  "Dashboard & laporan semua cabang",
  "Pembayaran QRIS (mode fleksibel — pakai milik Grooma atau milik Anda sendiri)",
  "Manajemen inventaris per cabang",
  "Program loyalitas pelanggan otomatis",
  "Approval & jejak audit transaksi",
] as const;

const faqs = [
  [
    "Apakah Grooma bisa dipakai untuk barbershop dengan banyak cabang?",
    "Bisa. Satu akun pemilik bisa memantau dan mengelola seluruh cabang dari satu dashboard, sementara setiap staf hanya mengakses cabang tempat ia ditugaskan.",
  ],
  [
    "Saya sudah punya QRIS sendiri, apakah tetap harus pakai QRIS dari Grooma?",
    "Tidak. Anda bisa langsung pakai QRIS yang sudah terintegrasi di Grooma, atau tetap memakai QRIS/metode pembayaran Anda sendiri — Grooma hanya mencatat transaksinya agar laporan tetap rapi dan terpusat.",
  ],
  [
    "Apakah data barbershop saya akan tercampur dengan bisnis lain pengguna Grooma?",
    "Tidak. Setiap bisnis yang bergabung mendapat ruang data dan sistemnya sendiri yang terpisah total dari bisnis lain.",
  ],
  [
    "Bagaimana Grooma menangani kesalahan input transaksi?",
    "Staf dapat mengajukan permintaan koreksi, dan pemilik/pengelola yang berwenang harus menyetujuinya terlebih dahulu sebelum perubahan berlaku. Setiap persetujuan tercatat sebagai jejak audit.",
  ],
  [
    "Apakah komisi karyawan dihitung otomatis?",
    "Ya. Setiap layanan punya persentase bagi hasil yang Anda atur di awal, dan sistem menghitungnya otomatis setiap transaksi selesai — tidak perlu hitung manual di akhir bulan.",
  ],
  [
    "Apakah Grooma punya aplikasi mobile?",
    "Ya — Grooma berbasis aplikasi mobile, dipakai oleh pemilik maupun staf, hanya tampilannya menyesuaikan peran masing-masing. Staf mencatat transaksi langsung dari HP atau tablet di cabang, pemilik memantau dashboard dan menyetujui koreksi dari HP-nya sendiri, di mana saja. Tidak ada dashboard web terpisah.",
  ],
  [
    "Apa yang terjadi kalau saya telat membayar langganan bulanan?",
    "Grooma memberi masa toleransi sebelum status langganan berubah, jadi operasional harian Anda tidak langsung terganggu karena keterlambatan singkat.",
  ],
  [
    "Bagaimana pelanggan mendapat keuntungan dari program loyalitas?",
    "Setiap transaksi yang berhasil dibayar otomatis menambahkan poin loyalitas ke akun pelanggan — tanpa perlu dihitung manual oleh staf.",
  ],
] as const;

export default function Home() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SplashScreen />
      <SiteHeader />

      <section
        id="beranda"
        className="relative isolate border-b border-primary-light bg-background"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_35%,rgba(167,243,208,.72),transparent_23%),radial-gradient(circle_at_8%_16%,rgba(204,251,241,.6),transparent_24%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:items-center lg:py-24">
          <div className="max-w-xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-light bg-surface/80 px-3.5 py-2 text-[10px] font-bold tracking-[.14em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> APLIKASI
              KASIR & MANAJEMEN BARBERSHOP
            </p>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-[-.03em] text-primary-hover sm:text-5xl lg:text-6xl">
              Kelola Semua Cabang Barbershop Anda dalam Satu Dashboard
            </h1>
            <p className="mt-7 text-lg leading-8 text-muted">
              Dari transaksi harian, stok produk, sampai komisi karyawan — semua
              tercatat rapi dan bisa Anda pantau real-time, dari cabang mana
              pun.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/daftar">
                  Mulai Sekarang <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="#cara-kerja">
                  Lihat Cara Kerjanya <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="mt-8 text-xs font-semibold tracking-wide text-muted">
              Dibangun khusus untuk kebutuhan operasional barbershop Indonesia
            </p>
          </div>
          <div aria-hidden="true" className="flex justify-center">
            <PhoneMockups className="h-auto w-full max-w-md" />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-5">
        <p className="mx-auto max-w-3xl px-5 text-center text-sm font-medium text-muted sm:px-8">
          Dibangun bersama pemilik barbershop di Indonesia, untuk masalah yang
          mereka alami tiap hari.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Intro
          eyebrow="MASALAH"
          title="Kenali Masalah Ini di Barbershop Anda?"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {problems.map(([Icon, title, copy], index) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-6 text-base font-semibold tracking-[-.02em]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary-hover py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="mb-4 text-center text-[11px] font-bold tracking-[.18em] text-primary-light">
            SOLUSI GROOMA
          </p>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-[-.045em] sm:text-4xl">
            Grooma Menyederhanakan Tiga Hal Ini
          </h2>
          <div className="relative mt-14 grid gap-10 md:grid-cols-3">
            <div className="pointer-events-none absolute inset-x-0 top-8 hidden h-px bg-white/15 md:block" />
            {pillars.map(([number, Icon, title, copy]) => (
              <div key={title} className="relative text-center">
                <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-primary-light">
                  <Icon className="h-7 w-7" />
                </span>
                <p className="mt-5 text-xs font-bold tracking-[.14em] text-primary-light">
                  PILAR {number}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-primary-light/75">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="fitur"
        className="border-b border-border bg-surface py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Intro
            eyebrow="FITUR UTAMA"
            title="Semua yang Anda Butuhkan, Sudah Ada di Dalamnya"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {features.map(([Icon, label, headline, copy]) => (
              <article
                key={label}
                className="group rounded-2xl border border-border p-6 transition hover:border-primary-light hover:shadow-lg hover:shadow-primary-hover/5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-bold tracking-[.11em] text-muted">
                    {label}
                  </p>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-[-.025em]">
                  {headline}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cara-kerja"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
      >
        <Intro
          eyebrow="CARA KERJA"
          title="Mulai Pakai Grooma dalam 4 Langkah"
        />
        <div className="relative mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute inset-x-0 top-7 hidden h-px bg-border lg:block" />
          {steps.map(([Icon, title, copy], index) => (
            <div key={title} className="relative">
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-light bg-surface text-primary shadow-sm">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-4 text-xs font-bold tracking-[.12em] text-primary">
                LANGKAH {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button asChild>
            <Link href="/daftar">
              Mulai Sekarang <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Intro
          centered
          eyebrow="UNTUK SELURUH TIM"
          title="Satu Aplikasi, Semua Peran Dapat Manfaatnya"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {roleColumns.map(([Icon, title, items]) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-surface p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-6 text-muted"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:py-28">
        <Intro
          eyebrow="SATU APLIKASI DI HP"
          title="Semua Bisa Dikerjakan Langsung dari HP Anda"
          copy="Grooma adalah aplikasi mobile — tidak perlu laptop atau perangkat khusus. Pemilik memantau dashboard dan menyetujui koreksi dari HP-nya sendiri, staf mencatat transaksi harian dari HP atau tablet di cabang. Satu aplikasi, dua peran, tanpa instalasi rumit."
        />
        <div aria-hidden="true" className="flex justify-center">
          <PhoneMockups className="h-auto w-full max-w-sm" />
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <Intro
            eyebrow="KEAMANAN & PRIVASI DATA"
            title="Data Bisnis Anda, Bukan Milik Bersama"
            copy="Setiap barbershop yang bergabung dengan Grooma mendapatkan sistem dan ruang data sendiri yang terpisah total dari bisnis lain. Tidak ada data yang tercampur, karena memang dipisahkan sejak awal — bukan sekadar dibatasi lewat aturan aplikasi."
          />
          <div className="space-y-3">
            {securityPoints.map(([Icon, text]) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-xl border border-border p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-sm leading-6 text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="harga"
        className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28"
      >
        <Intro
          centered
          eyebrow="HARGA"
          title="Satu Harga, Semua Fitur yang Anda Butuhkan"
          copy="Berlangganan bulanan, berlaku untuk seluruh cabang di bawah bisnis Anda — bukan dihitung per cabang."
        />
        <div className="mx-auto mt-12 max-w-md rounded-3xl border border-border bg-surface p-8 shadow-xl shadow-foreground/5">
          <p className="text-xs font-bold tracking-[.14em] text-primary">
            PAKET GROOMA
          </p>
          <p className="mt-3 text-4xl font-bold tracking-[-.03em]">
            Rp 49.000{" "}
            <span className="text-base font-medium text-muted">
              / bulan per bisnis
            </span>
          </p>
          <ul className="mt-7 space-y-3 border-t border-border pt-6">
            {inclusions.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-sm leading-6 text-muted"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8 w-full">
            <Link href="/daftar">
              Mulai Berlangganan <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <p className="mt-5 rounded-xl bg-warning/10 px-4 py-3 text-xs leading-5 text-foreground">
            Lupa bayar tepat waktu? Ada masa toleransi beberapa hari sebelum
            akses dibatasi, jadi operasional harian Anda tidak langsung
            terhenti.
          </p>
        </div>
      </section>

      <section
        id="faq"
        className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28"
      >
        <Intro centered eyebrow="FAQ" title="Pertanyaan yang Sering Diajukan" />
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map(([question, answer], index) => (
            <details className="group py-5" key={question} open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-semibold">
                {question}
                <ChevronDown className="shrink-0 text-primary transition group-open:rotate-180" />
              </summary>
              <p className="max-w-2xl pt-3 pr-8 text-sm leading-6 text-muted">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl rounded-3xl bg-primary-hover px-7 py-14 text-center text-white sm:px-12 lg:py-20">
          <p className="text-[11px] font-bold tracking-[.18em] text-primary-light">
            GROOMA
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-medium tracking-[-.04em] sm:text-5xl">
            Saatnya Barbershop Anda Dikelola Lebih Rapi
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-primary-light/75">
            Fokus ke pelanggan dan pelayanan — biar Grooma yang urus
            pencatatannya.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="light">
              <Link href="/daftar">
                Mulai Sekarang <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function PhoneMockups({ className }: { className?: string }) {
  return (
    <Image
      src="/phone-mockups.png"
      alt="Tampilan aplikasi Grooma di HP pemilik dan staf"
      width={480}
      height={440}
      className={className}
    />
  );
}
