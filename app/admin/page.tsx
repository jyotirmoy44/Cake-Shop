import { Container } from "@/app/components/ui/container";
import { SectionHeading } from "@/app/components/ui/section-heading";

export default function AdminPage() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeading
          eyebrow="Admin"
          title="Cakes admin dashboard"
          description="This area will later manage products, categories, orders, and SEO fields."
        />
      </Container>
    </section>
  );
}