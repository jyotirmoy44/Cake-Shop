import type { Cake } from "@/features/cakes/types/cake";

export const cakes: Cake[] = [
  {
    id: 1,
    name: "Chocolate Truffle Cake",
    slug: "chocolate-truffle-cake",
    description: "A rich chocolate cake layered with smooth truffle cream.",
    price: 799,
    weight: "1 kg",
    eggType: "Eggless",
  },
  {
    id: 2,
    name: "Red Velvet Cake",
    slug: "red-velvet-cake",
    description: "Classic red velvet sponge with cream cheese frosting.",
    price: 899,
    weight: "1 kg",
    eggType: "Egg",
  },
  {
    id: 3,
    name: "Black Forest Cake",
    slug: "black-forest-cake",
    description: "Soft sponge layered with whipped cream and chocolate flakes.",
    price: 699,
    weight: "500 g",
    eggType: "Eggless",
  },
];