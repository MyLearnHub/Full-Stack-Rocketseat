import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Mayk Brito",
        email: "mayk@email.com",
      },
      {
        name: "Diego Fernandes",
        email: "diego@email.com",
      },
    ],
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
