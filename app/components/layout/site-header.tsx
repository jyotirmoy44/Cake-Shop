import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Cakes", href: "/cakes" },
  { label: "Admin", href: "/admin" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-slate-900">
          CakeShop
        </Link>

        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}