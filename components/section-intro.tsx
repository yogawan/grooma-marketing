export function Intro({
  eyebrow,
  title,
  copy,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-4 text-[11px] font-bold tracking-[.18em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-.045em] text-foreground sm:text-4xl">
        {title}
      </h2>
      {copy && <p className="mt-5 text-base leading-7 text-muted">{copy}</p>}
    </div>
  );
}
