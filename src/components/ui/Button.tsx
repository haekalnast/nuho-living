"use client";

import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "nav";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export default function Button({
  variant = "primary",
  children,
  href,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseSolid =
    "inline-flex items-center justify-center px-6 py-4 rounded-lg text-base font-normal transition-colors duration-200 whitespace-nowrap";

  const baseNav =
    "group inline-flex flex-col items-start gap-0.5 text-base font-normal leading-6 bg-transparent border-0 p-0 rounded-none shadow-none text-neutral-500 hover:text-neutral-500 active:text-neutral-500 transition-colors duration-200";

  const variants = {
    primary: [
      "bg-primary text-white border border-primary",
      "hover:bg-primary-100 hover:border-primary-100",
      "active:bg-primary-pressed active:border-primary-pressed",
      "disabled:bg-neutral-300 disabled:border-neutral-300 disabled:text-secondary-500",
      "disabled:pointer-events-none disabled:cursor-not-allowed",
    ].join(" "),
    secondary: [
      "bg-transparent text-black border border-black",
      "hover:bg-secondary-100 hover:border-secondary-100 hover:text-white",
      "active:bg-secondary-300 active:border-secondary-300 active:text-white",
      "disabled:bg-transparent disabled:border-neutral-300 disabled:text-neutral-300",
      "disabled:pointer-events-none disabled:cursor-not-allowed",
    ].join(" "),
  };

  const classes =
    variant === "nav"
      ? `${baseNav} ${className}`.trim()
      : `${baseSolid} ${variants[variant]} ${className}`.trim();

  const content =
    variant === "nav" ? (
      <>
        {children}
        <span
          className="h-px w-full origin-left scale-x-0 bg-neutral-500 transition-transform duration-300 ease-out group-hover:scale-x-100 group-active:scale-x-100"
          aria-hidden
        />
      </>
    ) : (
      children
    );

  if (href) {
    if (disabled) {
      return (
        <span
          className={classes}
          aria-disabled="true"
          role="link"
        >
          {content}
        </span>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}
