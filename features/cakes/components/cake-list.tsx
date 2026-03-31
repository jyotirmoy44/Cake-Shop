import type { Cake } from "@/features/cakes/types/cake";
import { CakeCard } from "@/features/cakes/components/cake-card";

type CakeListProps = {
  cakes: Cake[];
};

export function CakeList({ cakes }: CakeListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cakes.map((cake) => (
        <CakeCard key={cake.id} cake={cake} />
      ))}
    </div>
  );
}