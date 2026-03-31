import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButtonProps = BaseButtonProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
};

type ButtonAsLinkProps = BaseButtonProps & {
  href: string;
  type?: never;
};

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

function getButtonClasses(variant: ButtonVariant, className: string) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-pink-600 text-white hover:bg-pink-700",
    secondary: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
  };

  return `${base} ${variants[variant]} ${className}`;
}

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = getButtonClasses(variant, className);

  if ("href" in props) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} className={classes}>
      {children}
    </button>
  );
}