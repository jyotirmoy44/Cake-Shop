import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/app/components/ui/container";
import { Button } from "@/app/components/ui/button";
import { getCakeBySlug } from "@/features/cakes/lib/get-cake-by-slug";

type CakeDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: CakeDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cake = getCakeBySlug(slug);

  if (!cake) {
    return {
      title: "Cake Not Found",
    };
  }

  return {
    title: cake.name,
    description: cake.description,
  };
}

export default async function CakeDetailPage({
  params,
}: CakeDetailPageProps) {
  const { slug } = await params;
  const cake = getCakeBySlug(slug);

  if (!cake) {
    notFound();
  }

  return (
    <section className="bg-slate-50 py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="h-96 rounded-2xl bg-white shadow-sm" />

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-pink-600">
              Cake Details
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              {cake.name}
            </h1>

            <p className="mt-4 text-slate-600">{cake.description}</p>

            <div className="mt-6 space-y-2 text-sm text-slate-700">
              <p>
                <span className="font-semibold">Weight:</span> {cake.weight}
              </p>
              <p>
                <span className="font-semibold">Egg Type:</span> {cake.eggType}
              </p>
            </div>

            <p className="mt-6 text-2xl font-bold text-slate-900">
              ₹{cake.price}
            </p>

            <div className="mt-8">
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}