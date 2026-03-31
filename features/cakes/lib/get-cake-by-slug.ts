import { cakes } from "@/features/cakes/data/cakes";

export function getCakeBySlug(slug: string) {
  return cakes.find((cake) => cake.slug === slug);
}