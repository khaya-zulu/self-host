/**
 * ! Executing this script will delete all data in your database and seed it with 10 user.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from "@snaplet/seed";
import { copycat } from "@snaplet/copycat";

const main = async () => {
  const seed = await createSeedClient();

  // Truncate all tables in the database
  await seed.$resetDatabase();

  // Seed the database with 10 user
  const users = await seed.user((x) => x(10));
  await seed.transaction(
    (x) =>
      x(40, {
        amount: (ctx) => {
          return copycat.int(ctx.seed, { min: 1, max: 100_000 });
        },
        createdAt: (ctx) => {
          return new Date(copycat.dateString(ctx.seed));
        },
      }),
    {
      connect: users,
    }
  );

  // Type completion not working? You might want to reload your TypeScript Server to pick up the changes

  console.log("Database seeded successfully!");

  process.exit();
};

main();
