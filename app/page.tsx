import { Container } from "@/app/components/ui/container";
import { Button } from "@/app/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Container className="flex min-h-screen flex-col items-center justify-center py-16 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-pink-600">
          Cakes Module
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Build and scale your cake storefront with Next.js
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          A modular, SEO-friendly commerce application that starts with cakes
          and can grow into a full product platform later.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/cakes">Explore Cakes</Button>
          <Button href="/admin" variant="secondary">
            Admin Preview
          </Button>
        </div>
      </Container>
    </main>
  );
}