import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/app/components/layout/site-header";
import { SiteFooter } from "@/app/components/layout/site-footer";

export const metadata: Metadata = {
  title: {
    default: "CakeShop",
    template: "%s | CakeShop",
  },
  description: "SEO-friendly cakes storefront built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}