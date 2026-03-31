import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  actions?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  actions,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${className}`}
    >
      <div>
        {eyebrow ? (
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-pink-600">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>

        {description ? (
          <p className="mt-3 max-w-2xl text-slate-600">{description}</p>
        ) : null}
      </div>

      {actions ? <div>{actions}</div> : null}
    </div>
  );
}