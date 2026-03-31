import { Container } from "@/app/components/ui/container";
import { SectionHeading } from "@/app/components/ui/section-heading";
import { cakes } from "@/features/cakes/data/cakes";
import { CakeList } from "@/features/cakes/components/cake-list";

export default function CakesPage() {
  return (
    <section className="bg-slate-50 py-12">
      <Container>
        <SectionHeading
          eyebrow="Cakes"
          title="Browse our cake collection"
          description="Discover cakes by flavor, weight, and egg preference."
        />

        <CakeList cakes={cakes} />
      </Container>
    </section>
  );
}