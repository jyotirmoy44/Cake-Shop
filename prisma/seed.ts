import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "../src/generated/prisma/client";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set.");
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
  log: ["warn", "error"],
});

const cakes = [
  {
    name: "Chocolate Truffle Cake",
    slug: "chocolate-truffle-cake",
    shortDescription: "Rich chocolate cake layered with smooth truffle cream.",
    description:
      "A decadent chocolate sponge finished with silky truffle frosting and dark chocolate garnish.",
    basePrice: "799.00",
    weight: "1 kg",
    eggType: "Eggless",
    flavor: "Chocolate",
    imageUrl: "/cakes/chocolate-truffle.jpg",
    sku: "CAKE-CHOC-TRUFFLE-1KG",
  },
  {
    name: "Red Velvet Cake",
    slug: "red-velvet-cake",
    shortDescription: "Classic red velvet sponge with cream cheese frosting.",
    description:
      "A moist red velvet cake layered with balanced cream cheese frosting for a classic celebration finish.",
    basePrice: "899.00",
    weight: "1 kg",
    eggType: "Egg",
    flavor: "Red Velvet",
    imageUrl: "/cakes/red-velvet.jpg",
    sku: "CAKE-RED-VELVET-1KG",
  },
  {
    name: "Black Forest Cake",
    slug: "black-forest-cake",
    shortDescription: "Soft sponge layered with whipped cream and chocolate flakes.",
    description:
      "A light chocolate sponge layered with cream, chocolate shavings, and a traditional black forest finish.",
    basePrice: "699.00",
    weight: "500 g",
    eggType: "Eggless",
    flavor: "Black Forest",
    imageUrl: "/cakes/black-forest.jpg",
    sku: "CAKE-BLACK-FOREST-500G",
  },
];

async function main() {
  await prisma.productImage.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.cakeProductMeta.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.module.deleteMany();

  const cakesModule = await prisma.module.create({
    data: {
      name: "Cakes",
      slug: "cakes",
      description: "Cake storefront module",
      isEnabled: true,
    },
  });

  const birthdayCategory = await prisma.category.create({
    data: {
      moduleId: cakesModule.id,
      name: "Birthday Cakes",
      slug: "birthday-cakes",
      description: "Celebration cakes for birthdays and special occasions.",
      isActive: true,
      sortOrder: 1,
    },
  });

  for (const cake of cakes) {
    await prisma.product.create({
      data: {
        moduleId: cakesModule.id,
        categoryId: birthdayCategory.id,
        name: cake.name,
        slug: cake.slug,
        shortDescription: cake.shortDescription,
        description: cake.description,
        basePrice: cake.basePrice,
        isActive: true,
        isFeatured: true,
        images: {
          create: [
            {
              imageUrl: cake.imageUrl,
              altText: cake.name,
              sortOrder: 1,
              isPrimary: true,
            },
          ],
        },
        variants: {
          create: [
            {
              sku: cake.sku,
              price: cake.basePrice,
              stockQuantity: 20,
              isActive: true,
            },
          ],
        },
        cakeMeta: {
          create: {
            flavor: cake.flavor,
            weight: cake.weight,
            eggType: cake.eggType,
            shape: "Round",
            customMessageAllowed: true,
            maxMessageLength: 30,
            sameDayDeliveryAvailable: true,
            prepTimeHours: 4,
          },
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error: unknown) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
