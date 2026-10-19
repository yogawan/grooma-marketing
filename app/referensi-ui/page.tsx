import { ArrowRight, Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Intro } from "@/components/section-intro";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SplashScreen } from "@/components/splash-screen";
import { Button } from "@/components/ui/button";

const problems = [
  [
    "01",
    "Informasi Terpisah",
    "Data batch, pemasok, produksi, dan distribusi dapat tercatat di tempat berbeda. Mengumpulkan konteks kejadian pun membutuhkan koordinasi tambahan.",
    "/Informasi Terpisah.png",
  ],
  [
    "02",
    "Jalur Distribusi Sulit Ditelusuri",
    "Petugas perlu mengetahui ke mana suatu batch dikirim dan lokasi penerima mana yang perlu diperiksa lebih lanjut.",
    "/Jalur Distribusi Sulit Ditelusuri.png",
  ],
  [
    "03",
    "Tindak Lanjut Sulit Dipantau",
    "Laporan, bukti, hasil pemeriksaan, dan tindakan korektif perlu terdokumentasi agar status penanganan dapat dipantau dengan jelas.",
    "/Tindak Lanjut Sulit Dipantau.png",
  ],
] as const;
const steps = [
  [
    "01",
    "Detect",
    "Catat dugaan insiden.",
    "Operator mencatat waktu kejadian, lokasi, batch terkait, informasi yang dilaporkan, dan bukti pendukung.",
  ],
  [
    "02",
    "Trace",
    "Telusuri batch dan penerima.",
    "Sistem menampilkan hubungan batch dengan data produksi, distribusi, dan sekolah penerima yang tercatat.",
  ],
  [
    "03",
    "Assess",
    "Tentukan prioritas pemeriksaan.",
    "Rule-based engine mengevaluasi indikator yang tersedia dan menampilkan faktor yang memengaruhi prioritas.",
  ],
  [
    "04",
    "Contain",
    "Catat tindakan pengendalian.",
    "Petugas berwenang mendokumentasikan langkah pengendalian yang diperlukan.",
  ],
  [
    "05",
    "Investigate",
    "Kumpulkan bukti dan temuan.",
    "Petugas mencatat kronologi, dokumen pendukung, hasil pemeriksaan, dan temuan investigasi.",
  ],
  [
    "06",
    "Resolve",
    "Dokumentasikan penyelesaian.",
    "Hasil investigasi, keputusan, dan tindakan korektif dicatat agar proses dapat ditinjau kembali.",
  ],
] as const;
const features = [
  [
    "01",
    "Batch Management",
    "Kenali riwayat setiap batch.",
    "Kelola identitas batch, informasi produksi, bahan baku, pemasok, dan status batch dalam satu tempat.",
    [
      "Pencatatan batch",
      "Referensi pemasok dan SPPG",
      "Status batch",
      "Informasi produksi dan penyimpanan",
    ],
    "/Kenali riwayat setiap batch.png",
  ],
  [
    "02",
    "Food Traceability",
    "Telusuri jalur dari produksi hingga penerima.",
    "Lihat hubungan batch dengan pengiriman dan sekolah penerima berdasarkan data yang tersedia di sistem.",
    [
      "Pencarian kode batch",
      "Riwayat distribusi",
      "Daftar lokasi penerima",
      "Referensi insiden terkait",
    ],
    "/Telusuri jalur dari produksi hingga penerima.png",
  ],
  [
    "03",
    "Distribution Tracking",
    "Pantau status pengiriman.",
    "Catat jadwal, keberangkatan, penerimaan, status distribusi, dan bukti pendukung.",
    [
      "Status pengiriman",
      "Catatan waktu",
      "Konfirmasi penerimaan",
      "Dokumentasi distribusi",
    ],
    "/Pantau status pengiriman.png",
  ],
  [
    "04",
    "Incident Reporting",
    "Ubah laporan menjadi informasi yang dapat ditindaklanjuti.",
    "Buat laporan dugaan insiden dengan kronologi, lokasi, batch terkait, dan bukti pendukung.",
    [
      "Form laporan terstruktur",
      "Keterkaitan dengan batch",
      "Unggah bukti",
      "Status penanganan",
    ],
    "/Ubah laporan menjadi informasi yang dapat ditindaklanjuti.png",
  ],
  [
    "05",
    "Rule-Based Risk Assessment",
    "Pahami faktor yang memengaruhi prioritas.",
    "Sistem mengevaluasi indikator yang ditentukan untuk membantu petugas memprioritaskan pemeriksaan.",
    [
      "Skor prioritas berbasis aturan",
      "Kategori prioritas",
      "Aturan yang terpenuhi",
      "Informasi data yang kurang",
    ],
    "/Pahami faktor yang memengaruhi prioritas.png",
  ],
  [
    "06",
    "Investigation & Response",
    "Dokumentasikan proses hingga selesai.",
    "Kelola penugasan, kronologi, temuan, bukti, hasil pemeriksaan, dan tindakan korektif.",
    [
      "Penugasan investigator",
      "Timeline investigasi",
      "Dokumentasi temuan",
      "Tindakan korektif",
      "Ringkasan penyelesaian",
    ],
    "/Dokumentasikan proses hingga selesai.png",
  ],
] as const;
const faqs = [
  [
    "Apa itu AMANGIZ?",
    "AMANGIZ adalah platform web untuk membantu penelusuran batch makanan, pencatatan dugaan insiden keamanan pangan, penilaian prioritas berbasis aturan, dan dokumentasi investigasi.",
  ],
  [
    "Siapa yang dapat menggunakan AMANGIZ?",
    "Pengguna yang dituju meliputi administrator, operator SPPG, operator sekolah, serta petugas investigasi atau pihak berwenang yang memiliki akses.",
  ],
  [
    "Apakah AMANGIZ dapat menentukan penyebab insiden secara otomatis?",
    "Tidak. AMANGIZ membantu mengorganisasi informasi dan memprioritaskan pemeriksaan. Penetapan penyebab membutuhkan investigasi dan bukti yang sesuai.",
  ],
  [
    "Bagaimana AMANGIZ membantu penelusuran batch?",
    "Sistem menghubungkan data batch dengan informasi produksi, distribusi, dan lokasi penerima yang tercatat. Kelengkapan hasil penelusuran bergantung pada kelengkapan data yang dimasukkan.",
  ],
  [
    "Apakah AMANGIZ menggantikan sistem pemerintah?",
    "Tidak. AMANGIZ diposisikan sebagai konsep platform pendukung workflow. Integrasi atau penggunaan bersama sistem resmi membutuhkan koordinasi, akses, dan persetujuan dari pihak terkait.",
  ],
  [
    "Apakah AMANGIZ sudah terhubung dengan sistem eksternal?",
    "Integrasi eksternal hanya dapat diklaim apabila benar-benar telah diimplementasikan dan diuji. Untuk prototipe, data demo atau simulasi harus diberi label yang jelas.",
  ],
];

function LoginButton({ light = false }: { light?: boolean }) {
  return (
    <Button asChild variant={light ? "light" : "default"}>
      <Link href="/login">
        Masuk ke Dashboard <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SplashScreen />
      <SiteHeader />

      <section
        id="beranda"
        className="relative isolate border-b border-primary-light bg-primary-light/20"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_35%,rgba(167,243,208,.72),transparent_23%),radial-gradient(circle_at_8%_16%,rgba(204,251,241,.6),transparent_24%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:py-24">
          <div className="max-w-xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-light bg-surface/80 px-3.5 py-2 text-[10px] font-bold tracking-[.14em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> PLATFORM
              TRACEABILITY & RESPONS PENANGANAN INSIDEN PANGAN
            </p>
            <h1 className="text-5xl font-semibold leading-[.98] tracking-[-.065em] text-primary-hover sm:text-6xl lg:text-7xl">
              Jaga Gizi.
              <br />
              <span className="text-primary">Jaga Generasi.</span>
            </h1>
            <p className="mt-7 text-lg leading-8 text-muted">
              Dari batch makanan hingga lokasi penerima, AMANGIZ membantu pihak
              terkait menelusuri distribusi, mencatat dugaan insiden keamanan
              pangan, dan mengoordinasikan tindak lanjut dalam satu alur kerja
              yang terintegrasi.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LoginButton />
              <Button asChild variant="outline">
                <a href="#cara-kerja">
                  Lihat Cara Kerja <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="mt-8 text-xs font-semibold tracking-wide text-muted">
              Traceability <span className="mx-2 text-primary">•</span> Risk
              Assessment <span className="mx-2 text-primary">•</span> Incident
              Response
            </p>
          </div>
          <Image
            src="/Hero.png"
            alt=""
            width={560}
            height={560}
            priority
            className="mx-auto h-auto w-full max-w-md lg:max-w-lg"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Intro
          eyebrow="TANTANGAN DI LAPANGAN"
          title="Saat informasi tersebar, penanganan membutuhkan koordinasi ekstra."
          copy="Ekosistem distribusi makanan melibatkan banyak pihak dan tahapan. Ketika muncul dugaan masalah keamanan pangan, informasi mengenai batch, jalur distribusi, penerima, dan tindak lanjut perlu ditelusuri dengan cepat serta dicatat secara konsisten."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {problems.map(([number, title, copy, icon]) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-bold text-primary">{number}</span>
                <Image
                  src={icon}
                  alt=""
                  width={96}
                  height={96}
                  className="h-24 w-24"
                />
              </div>
              <h3 className="mt-9 text-lg font-semibold tracking-[-.025em]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{copy}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 border-l-2 border-primary pl-4 text-lg font-medium tracking-[-.02em]">
          Penanganan yang terkoordinasi dimulai dari informasi yang saling
          terhubung.
        </p>
      </section>

      <section className="bg-primary-hover py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-[11px] font-bold tracking-[.18em] text-primary-light">
              SOLUSI AMANGIZ
            </p>
            <h2 className="text-3xl font-semibold tracking-[-.045em] sm:text-4xl">
              Satu alur kerja untuk menelusuri, menilai, dan menindaklanjuti.
            </h2>
            <p className="mt-5 leading-7 text-primary-light/75">
              AMANGIZ menghubungkan pencatatan batch makanan, distribusi,
              laporan dugaan insiden, penilaian prioritas, dan dokumentasi
              investigasi dalam satu platform operasional.
            </p>
            <Button asChild variant="light" className="mt-8">
              <a href="#cara-kerja">
                Jelajahi Cara Kerja <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {(
              [
                [
                  "Hubungkan data",
                  "Kaitkan batch dengan pemasok, SPPG, pengiriman, dan sekolah penerima.",
                  "/Hubungkan data.png",
                ],
                [
                  "Telusuri distribusi",
                  "Lihat jalur distribusi berdasarkan data yang tercatat.",
                  "/Telusuri distribusi.png",
                ],
                [
                  "Prioritaskan pemeriksaan",
                  "Gunakan rule-based risk assessment untuk membantu menilai urgensi tindak lanjut.",
                  "/Prioritaskan pemeriksaan.png",
                ],
                [
                  "Dokumentasikan respons",
                  "Simpan kronologi, bukti, temuan, dan tindakan korektif secara terstruktur.",
                  "/Dokumentasikan respons.png",
                ],
              ] as const
            ).map(([title, copy, icon]) => (
              <div
                className="rounded-xl border border-white/10 bg-white/5 p-5"
                key={title}
              >
                <Image
                  src={icon}
                  alt=""
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-lg"
                />
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-primary-light/65">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cara-kerja"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
      >
        <Intro
          centered
          eyebrow="CARA KERJA"
          title="Dari laporan awal hingga tindak lanjut yang terdokumentasi."
          copy="AMANGIZ membantu menghubungkan setiap tahap penanganan agar pihak yang berwenang dapat memahami konteks kejadian dan menentukan langkah berikutnya berdasarkan informasi yang tersedia."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([number, label, title, copy]) => (
            <article
              className="relative rounded-2xl border border-border bg-surface p-6"
              key={label}
            >
              <span className="absolute right-5 top-5 text-4xl font-bold tracking-[-.08em] text-border">
                {number}
              </span>
              <p className="text-xs font-bold tracking-[.14em] text-primary">
                {label}
              </p>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 overflow-x-auto rounded-xl border border-primary-light bg-primary-light px-5 py-4 text-center text-xs font-bold tracking-[.13em] whitespace-nowrap text-primary">
          DETECT <span className="mx-2 text-primary">→</span> TRACE{" "}
          <span className="mx-2 text-primary">→</span> ASSESS{" "}
          <span className="mx-2 text-primary">→</span> CONTAIN{" "}
          <span className="mx-2 text-primary">→</span> INVESTIGATE{" "}
          <span className="mx-2 text-primary">→</span> RESOLVE
        </div>
      </section>

      <section
        id="fitur"
        className="border-y border-border bg-surface py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Intro
            eyebrow="FITUR UTAMA"
            title="Informasi yang terhubung. Tindak lanjut yang lebih terarah."
            copy="Setiap fitur AMANGIZ dirancang untuk mendukung bagian penting dalam proses traceability dan penanganan dugaan insiden keamanan pangan."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map(
              ([number, title, headline, copy, capabilities, image]) => (
                <article
                  className="group rounded-2xl border border-border p-6 transition hover:border-primary-light hover:shadow-lg hover:shadow-primary-hover/5"
                  key={title}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold text-primary">
                      {number}
                    </span>
                    <Image
                      src={image}
                      alt=""
                      width={96}
                      height={96}
                      className="h-24 w-24"
                    />
                  </div>
                  <p className="mt-7 text-xs font-bold tracking-[.11em] text-muted">
                    {title}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-.035em]">
                    {headline}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{copy}</p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-5">
                    {capabilities.map((item) => (
                      <li className="flex gap-2 text-xs text-muted" key={item}>
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ),
            )}
          </div>
          <p className="mt-6 rounded-xl bg-warning/10 px-4 py-3 text-xs leading-5 text-foreground">
            <strong>Catatan penilaian prioritas:</strong> Penilaian berbasis
            aturan merupakan alat bantu operasional, bukan diagnosis medis atau
            penetapan penyebab insiden.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:py-28">
        <Intro
          eyebrow="TELUSURI HUBUNGAN DATA"
          title="Ketahui ke mana batch dikirim dan siapa yang perlu ditindaklanjuti."
          copy="Saat sebuah batch perlu diperiksa, petugas dapat melihat jalur distribusi yang tercatat dan mengidentifikasi lokasi penerima yang relevan untuk pemeriksaan lebih lanjut."
        />
        <Traceability />
      </section>

      <section className="bg-primary-hover py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-[11px] font-bold tracking-[.18em] text-primary-light">
              PENILAIAN PRIORITAS
            </p>
            <h2 className="text-3xl font-semibold tracking-[-.045em] sm:text-4xl">
              Bukan sekadar skor. Pahami alasan di balik setiap prioritas.
            </h2>
            <p className="mt-5 leading-7 text-primary-light/75">
              AMANGIZ menggunakan rule-based risk assessment untuk membantu
              petugas meninjau indikator yang relevan, mengetahui data yang
              masih kurang, dan menentukan kebutuhan tindak lanjut.
            </p>
            <p className="mt-7 border-l-2 border-primary-light pl-4 text-sm leading-6 text-primary-light/70">
              Hasil penilaian bergantung pada data dan aturan yang
              dikonfigurasi. Sistem tidak menetapkan diagnosis, memastikan
              kontaminasi, atau menyimpulkan penyebab insiden secara otomatis.
            </p>
          </div>
          <RiskCard />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Intro
          centered
          eyebrow="KOLABORASI ANTARPIHAK"
          title="Setiap pihak melihat informasi sesuai perannya."
          copy="AMANGIZ mendukung koordinasi dengan akses yang disesuaikan terhadap tanggung jawab dan cakupan data masing-masing pengguna."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Administrator",
              "Mengelola pengguna, data referensi, konfigurasi, dan akses sistem.",
              "/Administrator.png",
            ],
            [
              "Operator SPPG",
              "Mencatat batch, informasi produksi, dan distribusi sesuai kewenangannya.",
              "/Operator SPPG.png",
            ],
            [
              "Operator Sekolah",
              "Melihat informasi penerimaan yang relevan dan melaporkan dugaan insiden.",
              "/Operator Sekolah.png",
            ],
            [
              "Investigator / Petugas Berwenang",
              "Meninjau laporan, menelusuri batch terkait, mendokumentasikan investigasi, dan mencatat tindak lanjut.",
              "/Investigator Petugas Berwenang.png",
            ],
          ].map(([role, copy, image]) => (
            <article
              key={role}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <Image
                src={image}
                alt=""
                width={96}
                height={96}
                className="h-24 w-24"
              />
              <h3 className="mt-5 font-semibold">{role}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs leading-5 text-muted">
          Akses terhadap data dan tindakan operasional dibatasi berdasarkan
          role, organisasi, serta penugasan yang berlaku.
        </p>
      </section>

      <section className="border-y border-border bg-surface py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <Intro
            eyebrow="AKUNTABILITAS OPERASIONAL"
            title="Setiap tindakan penting perlu memiliki jejak yang jelas."
            copy="Dalam penanganan insiden, bukan hanya hasil akhir yang penting. Riwayat perubahan, bukti pendukung, dan pihak yang melakukan tindakan juga perlu terdokumentasi."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {(
              [
                [
                  "Role-based access",
                  "Akses mengikuti tanggung jawab pengguna.",
                  "/Role-based access.png",
                ],
                [
                  "Evidence documentation",
                  "Bukti dan dokumen terkait tersimpan sebagai catatan kasus.",
                  "/Evidence documentation.png",
                ],
                [
                  "Activity history",
                  "Perubahan penting dicatat untuk membantu peninjauan.",
                  "/Activity history.png",
                ],
                [
                  "Traceable workflow",
                  "Status dan tindak lanjut dapat ditelusuri.",
                  "/Traceable workflow.png",
                ],
                [
                  "Data-aware assessment",
                  "Penilaian menampilkan aturan dan informasi yang digunakan.",
                  "/Data-aware assessments.png",
                ],
              ] as const
            ).map(([title, copy, image]) => (
              <div
                className="flex items-center gap-3 rounded-xl border border-border p-4"
                key={title}
              >
                <Image
                  src={image}
                  alt=""
                  width={96}
                  height={96}
                  className="h-24 w-24 shrink-0"
                />
                <div>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-muted">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tentang"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"
      >
        <div className="rounded-3xl bg-gradient-to-br from-primary-light/70 to-primary-light/20 p-7 sm:p-12">
          <Intro
            eyebrow="TENTANG AMANGIZ"
            title="Teknologi untuk mendukung koordinasi keamanan pangan."
            copy="AMANGIZ dikembangkan sebagai konsep platform digital yang membantu menghubungkan informasi batch makanan, distribusi, dugaan insiden, dan tindak lanjut operasional dalam ekosistem MBG."
          />
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            Dengan pendekatan traceability dan workflow yang terdokumentasi,
            AMANGIZ bertujuan membantu pihak terkait memperoleh konteks yang
            lebih jelas saat meninjau suatu kejadian.
          </p>
          <p className="mt-5 max-w-2xl text-sm font-medium leading-6 text-primary-hover">
            AMANGIZ dirancang untuk mendukung proses kerja manusia dan pihak
            berwenang—bukan menggantikan pemeriksaan, penilaian profesional,
            atau prosedur resmi.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <Intro
          centered
          eyebrow="FAQ"
          title="Pertanyaan yang sering diajukan"
          copy="Hal-hal mendasar seputar peran AMANGIZ dalam mendukung workflow penanganan dugaan insiden."
        />
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
            AMANGIZ
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-[-.05em] sm:text-5xl">
            Bangun alur penanganan yang lebih terhubung.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-primary-light/75">
            Mulai dari penelusuran batch hingga dokumentasi tindak lanjut,
            AMANGIZ membantu menyatukan informasi yang dibutuhkan untuk
            mendukung koordinasi penanganan dugaan insiden keamanan pangan.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <LoginButton light />
            <a
              href="#cara-kerja"
              className="inline-flex items-center justify-center rounded-xl border border-primary px-5 py-3.5 text-sm font-semibold"
            >
              Lihat Demo
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function Traceability() {
  return (
    <div>
      <div className="rounded-2xl border border-border bg-surface p-5 shadow-xl shadow-foreground/5 sm:p-8">
        <p className="text-xs font-bold tracking-[.12em] text-muted">
          CONTOH HUBUNGAN DATA
        </p>
        <div className="mt-6 flex flex-col items-center text-center text-sm font-semibold text-foreground">
          <span className="rounded-lg border border-border bg-background px-4 py-2">
            Pemasok Bahan
          </span>
          <span className="my-1.5 text-primary">↓</span>
          <span className="rounded-lg border border-border bg-background px-4 py-2">
            Bahan Baku
          </span>
          <span className="my-1.5 text-primary">↓</span>
          <span className="rounded-lg bg-primary px-5 py-2.5 text-white">
            Batch Makanan{" "}
            <small className="ml-1 font-mono text-primary-light">
              BT-2408-117
            </small>
          </span>
          <span className="my-1.5 text-primary">↓</span>
          <span className="rounded-lg border border-primary-light bg-primary-light px-4 py-2 text-primary-hover">
            SPPG Cempaka
          </span>
          <span className="my-1.5 text-primary">↓</span>
          <span className="rounded-lg border border-border bg-background px-4 py-2">
            Distribusi
          </span>
          <span className="my-1.5 text-primary">↓</span>
          <div className="grid w-full max-w-md gap-2 sm:grid-cols-3">
            {[
              "Sekolah Penerima A",
              "Sekolah Penerima B",
              "Sekolah Penerima C",
            ].map((item) => (
              <span
                className="rounded-lg border border-border p-2 text-[11px]"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
          <span className="my-1.5 text-primary">↓</span>
          <span className="rounded-lg border border-warning/30 bg-warning/10 px-4 py-2 text-foreground">
            Laporan & tindak lanjut, jika diperlukan
          </span>
        </div>
      </div>
      <p className="mt-4 text-xs leading-5 text-muted">
        Visualisasi menampilkan hubungan data yang tersedia dan tercatat di
        AMANGIZ. Data yang belum terhubung atau belum diverifikasi ditandai
        dengan jelas.
      </p>
      <a
        href="#fitur"
        className="mt-5 inline-flex items-center text-sm font-semibold text-primary"
      >
        Lihat Traceability <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}
function RiskCard() {
  const missingData = [
    "Catatan penyimpanan.",
    "Waktu pengiriman dan penerimaan.",
    "Bukti pendukung dari lokasi terkait.",
  ];
  return (
    <div className="rounded-2xl bg-surface p-2 text-foreground shadow-2xl shadow-black/20">
      <div className="rounded-xl border border-border p-5 sm:p-7">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-bold tracking-[.11em] text-muted">
              PENILAIAN PRIORITAS
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              Prioritas pemeriksaan:{" "}
              <span className="text-risk-high">High</span>
            </h3>
          </div>
          <span className="rounded-lg bg-risk-high/10 px-2.5 py-1.5 text-xs font-bold text-risk-high">
            HIGH
          </span>
        </div>
        <div className="mt-6 border-t border-border py-5">
          <p className="text-sm font-semibold">Faktor yang teridentifikasi</p>
          <ul className="mt-3 space-y-2.5">
            {[
              "Terdapat laporan dari lokasi penerima.",
              "Catatan suhu perlu diverifikasi.",
              "Informasi distribusi belum lengkap.",
            ].map((item) => (
              <li className="flex gap-2 text-sm text-muted" key={item}>
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-risk-high/100" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-border py-5">
          <p className="text-sm font-semibold">Data yang perlu diperiksa</p>
          <ul className="mt-3 space-y-2.5">
            {missingData.map((item) => (
              <li className="flex gap-2 text-sm text-muted" key={item}>
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted/40" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-border pt-5">
          <p className="text-sm font-semibold">
            Langkah berikutnya yang disarankan
          </p>
          <p className="mt-2 rounded-lg bg-primary-light px-3 py-2.5 text-sm text-primary-hover">
            Tinjau laporan dan verifikasi informasi pendukung.
          </p>
        </div>
      </div>
    </div>
  );
}
