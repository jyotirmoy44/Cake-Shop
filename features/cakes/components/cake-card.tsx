import Link from "next/link";
import type { Cake } from "@/features/cakes/types/cake";

type CakeCardProps = {
  cake: Cake;
};

export function CakeCard({ cake }: CakeCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 h-44 rounded-xl bg-slate-100" />

      <h2 className="text-lg font-semibold text-slate-900">{cake.name}</h2>

      <p className="mt-2 text-sm text-slate-600">
        {cake.weight}, {cake.eggType}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-base font-bold text-slate-900">₹{cake.price}</span>

        <Link
          href={`/cakes/${cake.slug}`}
          className="rounded-lg bg-pink-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-pink-700"
        >
          View
        </Link>
      </div>
    </article>
  );
}